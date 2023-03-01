import mongoose, { model } from "mongoose";
import {  walletData } from "../interfaces/AllInterferce";

interface MainData extends walletData,mongoose.Document{}

const walletSchema = new mongoose.Schema<walletData>({
balance:{
    type:Number,
   
},
credit:{
    type:Number,
    
},
debit:{
    type:Number,
},
quickSave:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"quicksaves",
    }
],
safeLock:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:"savelocks",
    }
],
target:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"targets"
    }
]
},
{
    timestamps:true},
)

export default mongoose.model<MainData>("wallets",walletSchema)