const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Plaese add a username!"],
    },

    email: {
        type : String,
        required : [true, "Please add the user email"],
        unique : [true, "Email address is already used!"],
    },
    
    phone: {
        type : String
    },
    
    address :{
        type:String,
        required:true
    },

    password: {
        type : String,
        required: [true, "Please add the user password!"],
    },
    
    imageUrl : {
        type : String
    }

}, 
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("user", userSchema);