const mongoose = require('mongoose');

const customerReviewModel = mongoose.Schema({
    name : {
        type: String,
        required: [true, "Please add user name"],
    },

    email:{
        type: String,
        required : [true, "Please add user email"]
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

module.exports = mongoose.model("customer_reviews", customerReviewModel);