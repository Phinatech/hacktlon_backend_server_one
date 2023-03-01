import mongoose from "mongoose";
import { Locks } from "../interfaces/AllInterferce";
interface MainData extends Locks,mongoose.Document{}

const SaveLockSchema = new mongoose.Schema<Locks>({
    amount:{
        type:Number,
    },
    lock:{
        type:Boolean,
    },
    PayBackTime:{
        type:String,
    },
    interest:{
        type:Number
    },
    title:{
        type:String,
    }
},
{ timestamps: true},
);

export default mongoose.model<MainData>("savelocks", SaveLockSchema)