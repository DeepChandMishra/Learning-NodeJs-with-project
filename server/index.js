const express=require('express')
require('dotenv').config()
require('./dbconfig/dbconfig')
const cors=require('cors');
const users=require('./model/userModel');
const userRouter = require('./route/userRoute');
const app= express();
const PORT=process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api',userRouter);

app.listen(PORT,(req,res)=>{
    console.log("server is running")
})