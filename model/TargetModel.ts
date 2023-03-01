import mongoose from "mongoose";
import { TargetData} from "../interfaces/AllInterferce";

interface MainData extends TargetData , mongoose.Document{}

const TargetSchema = new mongoose.Schema<TargetData>({
    amount:{
        type:Number,
    },
    targetValue:{
        type:Boolean
    },
    fixedAmount:{
        type:Number,
    },
    interest:{
        type:Number,
    },
    dataTime:{
        type:String,
    },
    title:{
        type:String
    },
},
{timestamps: true},
);

export default mongoose.model<MainData>("targets", TargetSchema)