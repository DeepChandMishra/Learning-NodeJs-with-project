const express= require('express')
const {signUp,login} =require('../controller/usercontroller');
const { checkToken } = require('../middlware/checkToken');

const userRouter=express.Router();

userRouter.post('/signup',signUp);

userRouter.post('/login',login);

module.exports=userRouter;