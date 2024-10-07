const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const {Users }=require('../model/userModel')
const secretKey= process.env.secretKey

//signup
exports.signUp= async(req,res)=>{
    const {name,email,password}=req.body;
     
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        const user=await Users.create({name,email,password:hashedPassword});
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({error:'User creation failed'});
    }
}

//login
exports.login= async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user= await Users.findOne({where:{email}})
        if(!user) {
            return res.status(404).json({error:'user not found'})
        }

        const isMatch=bcrypt.compare(password,user.password)
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token=jwt.sign({id: user.id},secretKey,{expiresIn:"1hr"})
        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
}



