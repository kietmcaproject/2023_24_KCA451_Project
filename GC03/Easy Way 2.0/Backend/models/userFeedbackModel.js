const mongoose = require('mongoose');

const userFeedback = mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please add user name"],
    },

    email:{
        type: String,
        required : [true, "Please add user email"],
        unique : [true, "email id already user"],
    },

    rating :{
        type : String,
        required: [true, "Please add some rating"],
    },

    user_message : {
        type : String,
    },
},
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("userFeedback", userFeedback);