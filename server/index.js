const express=require('express')
const db=require('./dbconfig/dbconfig')
const cors=require('cors');
const users=require('./model/userModel')
const app= express();

app.use(express.json());
app.use(cors());

app.listen(4001,(req,res)=>{
    console.log("server is running")
})