const asyncHandler = require("express-async-handler");
const AllUsers = require('../models/AllUsers')
const User = require("../models/userModel");
const Worker = require("../models/workerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").config();
const nodemailer = require("nodemailer");

const saltRounds = 10;


const userProfile = asyncHandler (async (req, res)=>{
    const {id} = req.params;

    const userData = await User.findOne({_id:id });

    if(userData)
    {
        res.status(200).json(userData);
    }else{

        const worker = await Worker.findOne({ _id:id});
        res.status(200).json(worker);
    }

    res.status(400);
}) 

const userLogin = asyncHandler (async (req, res) =>{

    const {email, password} = req.body;
    console.log(email)
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    // comparing password
    const user = await AllUsers.findOne({ email });
    
    if(user && (await bcrypt.compare(password, user.password))){
        const payload = {
            _id: user._id,email
        };
        console.log(payload)
        
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2h"});
        res.cookie('access_token', token, {
            httpOnly: true
        });

        if(user.userType == 'admin')
            res.status(200).json({_id:user._id, email: user.email, userType:'admin'});
        
        if(user.userType == 'user'){
            const data = await User.findOne({email});

            if(data)
                res.status(200).json({_id:data._id, name: data.name, email: data.email,imageUrl:data.imageUrl,userType:'user'});
            
            
        }

        if(user.userType == 'worker')
        {
            const worker = await Worker.findOne({email});

            if(worker)
                res.status(200).json({_id: worker.id, name: worker.name, email: worker.email,imageUrl:worker.imageUrl, userType:'worker'});
            
        }

        console.log(`${user} login successfull!`);
    }
    else{
        
        res.status(401);
        throw new Error("Invalid credentials! Email or password is not valid!");
    }

})

//@desc contact us
//@route /api/contactUs
//@public

const contactUs = async (req, res) => {
    const {name, email, phone, message} = req.body;
    console.log(req.body)
    try{
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.comm',
            port: 465,
            secure: true,
            auth: {
                user: process.env.mailID,
                pass: process.env.mailPassword
            }
        });

        console.log("sending message...");
        let info = await transporter.sendMail({
            from: process.env.mailID,
            to: process.env.mailID,
            subject: "Query from user",
            text: "",
            html : `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Contact us</title>
                <style>
                    .main-cont{
                        display: flex;
                        flex-direction: column;
                        justify-self: center;
                        box-shadow: 1px 1px 4px gray;
                        border-radius: 5px;
                        height: auto;
                        margin: 1rem;
                        margin-top: 0;
                        padding: 1rem;
                        flex-wrap: wrap;
                    }
                    
                    td{
                        padding: 0.35rem;
                    }
            
                    .name, .phone, .email{
                        padding: .5rem;
                        font-weight: bold;
                        font-size: 1.3rem;
                        color: rgb(84,55,182);
                        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
                    }
                    
                    .msg-heading{
                        padding-top: 1rem;
                        font-size: 1.5rem;
                        color: rgb(84,55,182);
                        font-weight: bold;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }
                    .msg{
                        padding-top: 0.5rem;
                        font-weight: 600;
                        color:rgb(51, 150, 190);
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    }
                </style>
            </head>
            <body>
                <div class="main-cont">
                    <table class="tab">
                        <tr>
                            <td>
                                <div class="name">Name: ${name}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="email">Email: ${email}</div>
                        </td>
                        </tr>
                        <tr>
                            <td>
                            <div class="phone">Phone: ${phone}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="msg-heading">Message from user</div>
                                <div class="msg">${message}</div>
                
                            </td>
                        </tr>
                    </table>
                    
                    </div>
            </body>
            </html>`
        });

        console.log(info);

        if(info){
            res.status(200).json({message: "query submitted!", info : info});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json([{error: err}, {message: err.message}]);
    }
};


module.exports = {userLogin,userProfile,contactUs}