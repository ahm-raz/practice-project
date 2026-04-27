import express from "express";

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hello Auth");
})

router.get('/home',(req,res)=>{
    res.send("Hello Home");
    // adbad
})

export default router;