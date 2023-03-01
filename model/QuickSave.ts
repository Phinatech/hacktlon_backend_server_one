import mongoose, { model } from "mongoose";
import {  Quick } from "../interfaces/AllInterferce";

interface MainData extends Quick,mongoose.Document{}

const QuickSchema = new mongoose.Schema<Quick>({
amount:{
    type:Number,
   
},
autoSave:{
    type:Boolean,
    
},
dateTime:{
    type:Number || String
},
interest:{
    type:Number,
}

},
{
    timestamps:true}
    )

export default mongoose.model<MainData>("quicksaves",QuickSchema)