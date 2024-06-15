const mongoose = require('mongoose');

const workerSchema = mongoose.Schema( {
    name:{
        type : String,
        required: [true, "Please add a user name"]
    },
    email : {
        type : String,
        required: [true, "Please add an email"]
    },
    password: {
        type : String,
        required : [true, "Please add a password"]
    },
});

module.exports = mongoose.model("testWorker", workerSchema);