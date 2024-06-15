const asyncHandler = require("express-async-handler");
const AllUsers = require('../models/AllUsers')
const User = require("../models/userModel");
const Worker = require("../models/workerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

 const addAdmin = asyncHandler(async(req, res) => {
    
    
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = await AllUsers.create({
            email:req.body.email,
            password:hashedPassword,
            userType:'admin'
        });
        if(user)
            res.status(200).json({msg:"succes"});
        else
            res.status(400).json({msg:"error"});

})

const userCount = asyncHandler(async(req, res) =>{
    const user = await User.countDocuments({});

    const worker = await Worker.countDocuments({});

    if(user && worker)
        res.status(200).json({user:user,worker:worker});
    else
    res.status(400).json({message:"error"})
})

module.exports = {addAdmin, userCount}