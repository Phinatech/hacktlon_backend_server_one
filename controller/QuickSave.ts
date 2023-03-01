import QuickSave from "../model/QuickSave";
import { Request,Response } from "express";
import walletModel from "../model/wallet.model";

export const CreateQuickSave =async (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        return res.status(404).json({
            message:" an error occured"
        })
    }
}

