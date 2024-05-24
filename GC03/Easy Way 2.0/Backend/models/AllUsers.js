const mongoose = require('mongoose');

const AllUsers = mongoose.Schema({
    email: String,
    password: String,
    userType: String,
},
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("alluser", AllUsers);