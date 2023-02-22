import express, { Router } from "express"
import mongoose from "mongoose"
import cors from "cors"
import router from "./Router/user.Router";
const port : number = 9000
const url = "mongodb://127.0.0.1:27017/hacktholn";


const app = express()
app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
res.status(200).json({
    message:"api is connected for comsumption"
})
})

app.use("/api/user", router)

mongoose.connect(url).then(()=>{
    console.log("connected to database")
})


app.listen(port,()=>{
    console.log("listening to port")
})