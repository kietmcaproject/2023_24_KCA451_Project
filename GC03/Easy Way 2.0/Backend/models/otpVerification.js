const mongoose = require('mongoose');

const optVerification = mongoose.Schema( {
    email: {
        type: String,
        required: [true, "Please add an email"]
    },
    otp: {
        type: String,
        required: [true, "Please add an otp"]
    },
},
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("otpRecord", optVerification);