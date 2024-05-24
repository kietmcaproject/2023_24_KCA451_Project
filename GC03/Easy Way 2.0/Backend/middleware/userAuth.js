const jwt = require('jsonwebtoken');
const User = require("../models/userTestModel");

const userAuth =async  (req,res,next) =>{
    try{
        const token = req.cookies.access_token;
        const verfyUser = jwt.verify(token,process.env.SECRET_KEY)
        console.log(verfyUser)
        const user = await User.findOne({_id:verfyUser._id});
        req.user = user;
        next();
            
    }catch(error)
    {
        res.status(401);
        throw new Error("Invalid!");
    }
    
}

module.exports = userAuth;