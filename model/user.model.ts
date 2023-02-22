import mongoose, { model } from "mongoose";
import { UserData } from "../interfaces/AllInterferce";

interface MainData extends UserData,
mongoose.Document{}

const UserSchema = new mongoose.Schema<UserData>({
name:{
    type:String,
    required:true
},
userName:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
},
password:{
    type:String,
    required:true,
  
},
accountNumber:{
    type:Number,
},
phoneNumber:{
    type:Number,
    required:true,

},
verified:{
    type:Boolean,
},
wallet:[
     {
        type: mongoose.Schema.Types.ObjectId,
        ref:"wallets"
    }],
history:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"histories"
    }]
},
{
    timestamps:true
})

export default mongoose.model<MainData>("Users",UserSchema)