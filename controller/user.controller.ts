import userModel from "../model/user.model";
import {Request,Response} from "express"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import walletModel from "../model/wallet.model";
import historyModel from "../model/history.model";


export const Register =async (req:Request,res:Response):Promise<Response> => {
    try {
        const {name,email,password,userName, phoneNumber,accountNumber} = req.body
        const dater = Date.now()

        let num = 234

        const generatedNumber = Math.floor(Math.random() * 78 ) + dater

        const Salt = await bcrypt.genSalt(10)
        const hash= await bcrypt.hash(password,Salt)

        const regUser = await userModel.create({
            name,
            email,
            userName,
            password:hash,
            phoneNumber: num +  phoneNumber,
            verified: true,
            accountNumber: generatedNumber
        
        })

        const  createwallet = await walletModel.create({
            _id: regUser?._id,
            balance:1000,
            credit:0,
            debit:0
        })

        regUser.wallet.push(new mongoose.Types.ObjectId(createwallet?._id))
        return res.status(200).json({
            message:"Created",
            data:regUser,
            token: jwt.sign({_id: regUser._id}, "yyyhhhhhhhhhhhhhhhhh")
    })
    } catch (err) {
        return res.status(404).json({
            message:"Anerror occured", err
        })
        
    }
};

//Tranfer to another wallet
export const MakeTransfer =async (req:Request,res:Response) => {
    try {
        const {accountNumber, amount} = req.body

        const referenceGeneratedNumber = Math.floor(Math.random() * 87697659) + 243

        //Receiver
        const getReceiver = await userModel.findOne({accountNumber})
        const getReceiverWallet = await walletModel.findById(getReceiver?._id)

        //sender account
        const getUser = await userModel.findById(req.params.UserID)
        const getUserwallet = await walletModel.findById(req.params.walletID)
        if (getUser && getReceiver) {
            if (amount > getUserwallet?.balance!) {
                return res.status(404).json({
                    message:"Insufficient fund"
                })
            } else {
                //updating the sender wallte
                 await walletModel.findByIdAndUpdate(getUserwallet?._id,{
                    balance: getUserwallet?.balance! - amount,
                    credit:0,
                    debit: amount
                 })
            }
            //getting a transaction history for the sender
            const createHistorySender = await historyModel.create({
                message:`you have sent ${amount} to ${getReceiver?.name}`,
                transactionType:"debit",
                transactionRefernce:referenceGeneratedNumber

            });
            getUser?.history?.push(new mongoose.Types.ObjectId (createHistorySender?._id))
            getUser.save();

            //receiver wallet
            await walletModel.findByIdAndUpdate(getReceiverWallet?._id,{
                balance:getReceiverWallet?.balance! + amount,
                credit:amount,
                debit:0
            });

            const createHistoryReceiver = await historyModel.create({
                message:`an amount of ${amount} has been sent to you by ${getUser?.name}`,
                transactionType: "credit",
                transactionRefernce:referenceGeneratedNumber,
            })
            getReceiver?.history.push(new mongoose.Types.ObjectId(createHistoryReceiver?._id))
            getReceiver.save();

            return res.status(200).json({
                message:"Transaction Successfull"
            })

        }else{
            return res.status(400).json({
                message:"Account is not found"
            })
        }
    } catch (error) {
        return res.status(404).json({
            message:"Anerror occured", error
        })
    }
}

//fUND WALLET FROM BANK
export const fundWalletFromBank = async(req:Request,res:Response)=> {
    try {
        const getUser = await userModel.findById(req.params.userID)
        const getWallet = await walletModel.findById(req.params.walletID)

        const {amount, transactionRef} = req.body
        await walletModel.findByIdAndUpdate





        res.status(200).json({
            message:"wallet has been updated successfully"
        })

        
    } catch (error) {
        return res.status(404).json({
            message:"Anerror occured", error
        })
    }
}