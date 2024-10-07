const jwt=require('jsonwebtoken')
const secretKey=process.env.secretKey

exports.checkToken=(req,res,next)=>{
    const token = req.header('Authorization')?.split(' ')[1];     

    if(!token){
        return res.status(401).json({ error: 'no token' }); 
    }

    jwt.verify(token,secretKey,(err,user)=>{
            if (err) {
                return res.status(401).json({ error: 'not verified' }); 
            }
            req.user = user; 
            console.log('Authenticated User:', req.user);
            next();
    })
}