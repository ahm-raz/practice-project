import express from "express";

const app = express();
const port = 3000;


import authRoutes from './routes/auth.route.js';
import docsRoutes from './routes/docs.route.js';

app.get('/home',authRoutes)
app.get('/docs',docsRoutes)



app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})