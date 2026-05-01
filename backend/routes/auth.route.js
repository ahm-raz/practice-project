import express from "express";
import User from "../models/user.js";
import {register,login} from "../controller/auth.controller.js";
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello Auth");
})

router.get('/home',(req,res)=>{
    res.send("Hello Home");
})

router.post('/register', register);
router.post('/login',login);

export default router;