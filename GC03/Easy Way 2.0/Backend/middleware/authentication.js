const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authentication = async (req,res,next) =>{
    
    try{
        const token = req.cookies.access_token;

        if(!token){
            console.log('token not found')
            return res.status(401).json("No token found");
        } 

        const userVerify = jwt.verify(token, process.env.SECRET_KEY);
        req.user = userVerify;
        next();
    }catch(error)
    {
        res.status(401);
        throw new Error("Invalid credentials!");
    }
    
}
   
module.exports = authentication;