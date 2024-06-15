const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Plaese add a username!"],
    },

    email: {
        type : String,
        required : [true, "Please add the user email"],
        unique : [true, "Email address is already used!"],
    },
    
    password: {
        type : String,
        required: [true, "Please add a password"],
    },
}, 
    {
        timestamps : true,
    }
);  

module.exports = mongoose.model("testUser", userSchema);