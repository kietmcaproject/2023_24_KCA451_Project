const mongoose = require("mongoose");

const workerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },

    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true
    },

    phone :  {
        type: String,
        required: [true, "Please add a phone number"],
    },

    address : {
        type:String,
        required: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },

    occupation: {
        type: String,
    },

    serviceList: [{
        type: String,
    }],

    description:{
        type: String
    },

    imageUrl : {
        type : String
    },

    rating:{
        type : String,
        default : 3,
    },
});

module.exports = mongoose.model("worker", workerSchema);

