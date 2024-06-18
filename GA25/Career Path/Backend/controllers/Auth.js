import UserModel from "../models/user.js";
import DataModel from "../models/data.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res
        .status(401)
        .json({ success: false, message: "User already Exist" });
    }
    const hasepassword = await bcryptjs.hashSync(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hasepassword,
    });

    await newUser.save();

    res.status(200).json({ message: "user register successfully", newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "interanl server error" });
    console.log(error);
  }
};

const savedata = async (req, res) => {
    try {
        const { classname, subject, graduation, interest, course, entrance, college } = req.body;

        const existData = await DataModel.findOne({ classname, subject, graduation, interest, course, entrance, college });
        if (existData) {
        return res
            .status(401)
            .json({ success: false, message: "Data already Exist" });
    }

        const newData = new DataModel({
            classname,
            subject,
            graduation,
            interest,
            course,
            entrance,
            college,
        });

        await newData.save();

        res.status(200).json({ message: "Data save successfully", newData })
    } catch (error) {
      res.status(500).json({success:false,message:"Internal server error"})
      console.log(error)
    }
  };

  const showresult = async (req, res) => {
    try {
      const { classname, subject, graduation, interest } = req.body;
  
      const data = await DataModel.findOne({ classname, subject, graduation, interest });
  
      if (!data) {
        return res
          .status(404)
          .json({ success: false, message: "For these input result not avaliable" });
      }
  
      res
        .status(200)
        .json({ success: true, message: "Result found successfully", data});
    } catch (error) {
      res.status(500).json({ success: false, message: "interanl server error" });
      console.log(error);
    }
  };
  
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not Registered" });
    }

    const ispassaowrdValid = await bcryptjs.compare(password, user.password);
    if (!ispassaowrdValid) {
      return res
        .status(404)
        .json({ success: false, message: "wrong Password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRETE);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });
    res
      .status(200)
      .json({ success: true, message: "Login successfully", user, token });
  } catch (error) {
    res.status(500).json({ success: false, message: "interanl server ereo" });
    console.log(error);
  }
};
const Logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "user Logout successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "interanl server error" });
    console.log(error);
  }
};
const CheckUser = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.log(error);
  }
};

const CheckData = async (req, res) => {
  try {
    const data = req.data;
    if (!data) {
      res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
    console.log(error);
  }
};




export { register, Login, Logout, CheckUser, savedata, showresult, CheckData };
