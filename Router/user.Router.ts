import express  from "express";
import {Router} from "express";
import { MakeTransfer, Register } from "../controller/user.controller";

const router = Router()

router.route("/register").post(Register)
router.route("/sendmoney/:UserID/:walletID").post(MakeTransfer)

export default router