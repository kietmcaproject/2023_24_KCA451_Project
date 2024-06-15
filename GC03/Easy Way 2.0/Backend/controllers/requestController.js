const Worker = require("../models/workerModel");
const User = require("../models/userModel")
const Request = require("../models/Request");
const AllUsers = require('../models/AllUsers'); 
const asyncHandler = require("express-async-handler");

const addRequest = asyncHandler (async (req,res)=>{

    const { toWorkerId, fromUserId } = req.body;
    const newRequest = new Request({
        from: fromUserId,
        to: toWorkerId
      });
    
    try {
        await newRequest.save();
    
        if(newRequest)
            res.status(200).json({message:"Request send!"});
        else
            res.status(400).json({message:"Already requested!"})
    } catch (error) {
        res.status(409).json({message:"Already requested!"})
        console.log(error)
    }
})

const requests = async(req, res) =>{
  const requests = await Request.find()
      .populate('from')
      .populate('to');
    res.json(requests);
}

const workerRequests = asyncHandler ( async(req,res) =>{
    const {id} = req.params;
    const requests = await Request.find({ to: id }).sort({ createdAt: -1 }).populate('from');
    
    res.status(200).json(requests);
   
})
const userRequests = asyncHandler ( async(req,res) =>{
    const {id} = req.params;
    const requests = await Request.find({ from: id }).sort({ createdAt: -1 }).populate('to');
    res.status(200).json(requests);
})

const accept = async(req, res) => {
    const request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    if (request.status !== 'Pending') {
      return res.status(400).json({ message: 'Cannot accept request that is not pending' });
    }
    request.status = 'Accepted';
    await request.save();
    res.json(request);
}

const reject = async(req, res) => {
    const request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    if (request.status !== 'Pending') {
      return res.status(400).json({ message: 'Cannot reject request that is not pending' });
    }
    request.status = 'Rejected';
    await request.save();
    res.json(request);
}
module.exports = {addRequest,workerRequests,accept,reject,userRequests, requests};