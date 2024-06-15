const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const dotenv = require("dotenv").config();
const sendMail = require("../controllers/sendMail");
const otpGenerator = require('otp-generator');
const optVerification = require("../models/otpVerification");
const AllUsers = require('../models/AllUsers');
const saltRounds = 10;
//@desc Register a user
//@route POST /api/users/register
//@access public

const userRegistration = asyncHandler ( async (req, res) => {

    const {name, phone, email, password, address, imageUrl} = req.body;

    if(!name || !email || !password || !address){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const userAvailable  = await AllUsers.findOne({ email });

    if(userAvailable){
        res.status(400);
        throw new Error("User already registered with this email!");
    }

    const salt = bcrypt.genSaltSync(saltRounds);

    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Hashed Password: ", hashedPassword);
    const user = await User.create( {
        name,
        phone, 
        email,
        address,
        password : hashedPassword,
        imageUrl
    });

    console.log(`${user}\nUser registered successfully!`);

    if(user){
        const addUser = await AllUsers.create({
            email,
            password:hashedPassword,
            userType:'user'
        })
        if(addUser)
            res.status(201).json({_id:user._id, name: user.name, email: user.email,imageUrl:user.imageUrl, userType:'user'});
        else{   
            await User.findOneAndDelete({email})
            res.status(400);
            throw new Error('Problem in creating user!')
        }
    }
    else{
        res.status(400);
        throw new Error("User data is not valid!");
    }
    // res.status(200).json({message : "user registered!"});
});


//@desc user login
//@route POST /api/users/login
//@access public
const userLogin = asyncHandler ( async (req, res) => {

    const {email, password} = req.body;
    console.log(email)
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    // comparing password
    const user = await User.findOne({ email });

    if(user && (await bcrypt.compare(password, user.password))){
        const payload = {
            _id: user._id,email
        };
        
        const token = sign(payload, process.env.SECRET_KEY, { expiresIn: "2h"});
        res.cookie('access_token', token, {
            httpOnly: true
        });

        
        res.status(200).json({_id:user._id, name: user.name, email: user.email,imageUrl:user.imageUrl});
        console.log(`${user} login successfull!`);
    }
    else{
        res.status(401);
        throw new Error("Invalid credentials! Email or password is not valid!");
    }

    // res.status(200).json({message : "user login successfull!"});
});

//@desc user profile
//@route GET /api/users/profile
//@access private

const userProfile = asyncHandler ( async (req, res) => {
    const {id} = req.params;
    const user = await User.findOne({ _id: id});
    if(user)
    {
        console.log(user);
        res.status(200).json(user);
    }
    res.status(400);
});

//@desc update user
//@route PUT api/user/editUser
//@access private

const editUser = asyncHandler ( async (req, res) => {
    // console.log("editUser: ",  req.user);
   const userId = req.user._id;
   // finding the user 
   const user = await User.findOne({_id: userId});
    // console.log("user:" ,user);
   if(!user){
        res.status(404);
        throw new Error("User does not exist!");
   }

   // updating data
   const {name, phone, email, password, address} = req.body;

   user.name = name || user.name;
   user.email = email || user.email;
   user.phone = phone || user.phone;
   user.address = address || user.address;


   const salt = genSaltSync(saltRounds);

    const hashedPassword = await hash(password, salt);
   user.password = password ? hashedPassword : user.password;

   console.log("updated");
   const updatedUser = await user.save();
   console.log("saved!");

   if(updatedUser){
    console.log(updatedUser);
       res.status(200).json(updatedUser);
   }
   else{
    res.status(400);
    throw new Error("Unable to update the user's data");
   }

});

//@des get all users
//@route /api/users/getAllUsers
//@access private -admin

const getAllUsers = asyncHandler ( async (req, res) => {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
});

//@desc delete logged in user
//@route delete /api/users/deleteUser
//@aceess private 

const deleteUser = asyncHandler ( async (req, res) => {
    const user = req.user;
    console.log("inside delete user:", user);
    const userId = user._id;
    const deletedUser = await User.findOneAndDelete({_id : userId});

    if(!deletedUser){
        res.status(400);
        throw new Error("Unbale to delete the user account");
    }

    res.status(200).json([{message: "User deleted successfully!"}, deletedUser]);
});

//@desc logout user
//@route GET /api/users/logout
//@access public

const userLogout = asyncHandler ( async (req, res) =>{
    console.log("logout");
    res.clearCookie("access_token");
    res.status(200).json({ message: "Logout success!"});
});


module.exports = {
    userRegistration,
    userLogin,
    userLogout,
    userProfile,
    editUser, 
    getAllUsers,
    deleteUser
}; 
