import mongoose, { model } from "mongoose";
import {  historyData } from "../interfaces/AllInterferce";

interface MainData extends historyData,mongoose.Document{}

const historySchema = new mongoose.Schema<historyData>({
message:{
    type:String,
   
},
transactionRefernce:{
    type:Number,
    
},
transactionType:{
    type:String,
},

},
{
    timestamps:true}
    )

export default mongoose.model<MainData>("histories",historySchema)