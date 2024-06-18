const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String, 
    min: 5,
  },
  mobile: {
    type: String,
    min: 10,
  },
  username: {
    type: String,
    min: 4,
    unique: true,
  },
  password: {
    type: String
  },
});
const UserModel = model("User", UserSchema);
module.exports = UserModel;
