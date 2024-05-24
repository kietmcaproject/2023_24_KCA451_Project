const asyncHandler = require("express-async-handler");
const Worker = require("../models/workerModel");
const Request = require("../models/Request");
const AllUsers = require('../models/AllUsers'); 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const dotenv = require("dotenv").config();
const saltRounds = 10;
//@desc Register a worker
//@route POST /api/workers/register
//@access public

const workerRegistration = asyncHandler ( async (req, res) => {

    console.log(req.body)
    const {name, phone, email, password, address, occupation, about, imageUrl,serviceList } = req.body;
    if(!name || !email || !password || !address){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const workerAvailable  = await AllUsers.findOne({ email });
    
    // if(workerAvailable){
    //     res.status(403).json({message:"Already exist!"});
    //     throw new Error("Worker already registered with this email!");
    // }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Hashed Password: ", hashedPassword);
    
    const worker = await Worker.create( {
        name,
        phone,
        email,
        address,
        password : hashedPassword,
        occupation,
        serviceList,
        description:about,
        imageUrl
    });


    if(worker){
        console.log(worker)
        const addUser = await AllUsers.create({
            email,
            password:hashedPassword,
            userType:'worker'
        })
        if(addUser){
            res.status(201).json({_id: worker.id, name: worker.name, email: worker.email, phone: worker.phone, imageUrl: worker.imageUrl, userType:'worker'});
            console.log(`${worker}\n Worker registered successfully!`);
        }else
        {
            await Worker.findOneAndDelete({email});
            res.status(400);
            throw new Error('Problem in creating user');
        }
    }
    else{
        res.status(400);
        throw new Error("Worker data is not valid!");
    }
    // res.status(200).json({message : "worker registered!"});
});


//@desc worker login
//@route POST /api/workers/login
//@access public
const workerLogin = asyncHandler ( async (req, res) => {

    const {email, password} = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    // comparing password
    const worker = await Worker.findOne({ email });

    if(worker && (await bcrypt.compare(password, worker.password))){
        const payload = {
            _id: worker._id,
            email
        };
        
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "2h"});
        res.cookie('access_token', token, {
            httpOnly: true
        });

        res.status(200).json({_id: worker.id, name: worker.name, email: worker.email});

        console.log(`${worker} login successfull!`);
    }
    else{
        res.status(401);
        throw new Error("Invalid credentials! Email or password is not valid!");
    }

    // res.status(200).json({message : "worker login successfull!"});
});

//@desc worker profile
//@route GET /api/workers/profile
//@access private

const workerProfile = asyncHandler ( async (req, res) => {
    const {id} = req.params;
    const worker = await Worker.findOne({ _id: id});
    console.log(worker);
    res.status(200).json(worker);
});

//@desc update worker
//@route PUT api/worker/editUser
//@access private

const editWorker = asyncHandler ( async (req, res) => {
    // console.log("editUser: ",  req.worker);
   const workerData = req.user;
   const workerId = workerData._id;
   // finding the worker 
   const worker = await Worker.findOne({_id: workerId});
    // console.log("worker:" ,worker);
   if(!worker){
        res.status(404);
        throw new Error("Worker does not exist!");
   }

   // updating data
   const {name, phone, email, password, address, occupation, serviceList, description, imageURL} = req.body;

   worker.name = name || worker.name;
   worker.email = email || worker.email;
   worker.phone = phone || worker.phone;
   worker.address = address || worker.address;
   worker.occupation = occupation || worker.occupation;
   worker.serviceList = serviceList || worker.serviceList;
   worker.description = description || worker.description;
   worker.imageURL = imageURL || worker.imageURL;


   const salt = genSaltSync(saltRounds);

    const hashedPassword = await hash(password, salt);
   worker.password = password ? hashedPassword : worker.password;

   console.log("updated", worker);
   const updatedWorker = await worker.save();
   console.log("saved!");

   if(updatedWorker){
    console.log(updatedWorker);
       res.status(200).json(updatedWorker);
   }
   else{
    res.status(400);
    throw new Error("Unable to update the worker's data");
   }

});

//@des get all workers
//@route /api/workers/getAllUsers
//@access private -admin

const getAllWorkers = asyncHandler ( async (req, res) => {
    const allWorkers = await Worker.find();
    res.status(200).json(allWorkers);
});

//@desc delete worker
//@route delete /api/workers/delete
//@access private - admin

const deleteWorker = asyncHandler( async (req, res) => {
    const workerData = req.user;
    const workerId = workerData._id;

    const deletedWorker = await Worker.findOneAndDelete({_id : workerId});

    if(!deletedWorker){
        res.status(400);
        throw new Error("Unable to delete the worker");
    }

    console.log(deletedWorker);
    res.status(200).json([{message : "Worker deleted successfully"}, deletedWorker]);
});

//@desc logout worker
//@route GET /api/workers/logout
//@access public

const workerLogout = asyncHandler ( async (req, res) =>{
    console.log("logout");
    res.clearCookie("access_token");
    res.status(200).json({ message: "Logout success!"});
});


const updateRating = asyncHandler( async (req,res) =>{
    const { id, rating } = req.body;
    try {
        const result = await Worker.updateOne(
            { _id: id },
            { $set: { rating: rating } }
        );

        if (result.nModified > 0) {
            res.status(200).json({ message: 'Rating updated successfully',result });
        } else {
            res.status(404).json({ message: 'Worker not found or rating not updated',result });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
})

module.exports = {
    workerRegistration,
    workerLogin,
    workerLogout,
    workerProfile,
    editWorker, 
    getAllWorkers,
    deleteWorker,
    updateRating
}; 

