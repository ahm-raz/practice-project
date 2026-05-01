import dotenv from "dotenv";
import express from "express";
import authRoutes from './routes/auth.route.js';
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
const port = 3000;




app.use('/auth',authRoutes);



app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})