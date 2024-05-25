const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const userotp = require("../models/UserOtp");
const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});


module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect Username or Password", status: false });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "username",
      "avatarImage",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};

module.exports.setAvatar = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    const userData = await User.findByIdAndUpdate(
      userId,
      {
        isAvatarImageSet: true,
        avatarImage,
      },
      { new: true }
    );
    return res.json({
      isSet: userData.isAvatarImageSet,
      image: userData.avatarImage,
    });
  } catch (ex) {
    next(ex);
  }
};

module.exports.logOut = (req, res, next) => {
  try {
    if (!req.params.id) return res.json({ msg: "User id is required " });
    onlineUsers.delete(req.params.id);
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }
};





module.exports.tryOtp = async (req, res) => {
  const { email } = req.body;
  res.send("Happens")
  const OTP = Math.floor(100000 + Math.random() * 900000);
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Sending Email for Otp Validation",
    text: `OTP:- ${OTP}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("error", error);
      return res.status(400).json({ error: "Email Not Send" });
    } else {
      console.log("Email Send", info.response);
      return res.status(200).json({ message: "Email Sent Successfully" });
    }
  });
}



module.exports.userSendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Please Enter Your Email' });
  }

  try {
    const preuser = await userotp.findOne({ email });

    if (preuser) {
      return res.status(400).json({ error: 'User already registered with this email' });
    }

    const OTP = Math.floor(100000 + Math.random() * 900000);
   

    const otp = OTP;
    const newOtp = new userotp({ email, otp });
    await newOtp.save();
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: 'Sending Email for OTP Validation',
      text: `OTP:- ${OTP}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error', error);
        return res.status(400).json({ error: 'Email Not Sent' });
      } else {
        return res.status(200).json({ message: 'Email Sent Successfully' });
      }
    });

  } catch (error) {
    console.log("Here")
    return res.status(400).json({ error: 'Invalid Details', error });
  }
};


// module.exports.userSendOtp = async (req, res) => {
//   const { email } = req.body;
//   if (!email) {
//     res.status(400).json({ error: "Please Enter Your Email" });
//   }
//   try {
//     const preuser = await User.findOne({ email });

//     if (preuser) {
//       const OTP = Math.floor(100000 + Math.random() * 900000);
//       const existEmail = await userotp.findOne({ email: email });
//       if (existEmail) {
//         const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, {
//           otp: OTP
//         }, { new: true }

//         );
//         await updateData.save();
//         const mailOptions = {
//           from: process.env.EMAIL_USERNAME,
//           to: email,
//           subject: "Sending Email for Otp Validation",
//           text: `OTP:- ${OTP}`
//         }
//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.log("error", error);
//             res.status(400).json({ error: "Email Not Send" })
//           } else {
//             console.log("Email Send", info.response);
//             res.status(200).json({ message: "Email Sent Successfully" })
//           }
//         })
//       } else {
//         const saveOtpData = new userotp({
//           email, otp: OTP
//         });
//         await saveOtpData.save();
//         const mailOptions = {
//           from: process.env.EMAIL_USERNAME,
//           to: email,
//           subject: "Sending Email for Otp Validation",
//           text: `OTP:- ${OTP}`
//         }
//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.log("error", error);
//             res.status(400).json({ error: "Email Not Send" })
//           } else {
//             console.log("Email Send", info.response);
//             res.status(200).json({ message: "Email Sent Successfully" })
//           }
//         })
//       }

//     }
//     else {
//       res.status(400).json({ error: "The Email doesn't matches" })
//     }
//   } catch (error) {
//     res.status(400).json({ error: "Invalid Details", error })

//   }
// }



module.exports.userverify = async (req, res) => {
  const { email, otp } = req.body;
  if (!otp || !email) {
    res.status(400).json({ error: "Please Enter Your OTP and email" })
  } try {
    const otpverification = await userotp.findOne({ email: email });
    if (otpverification.otp === otp) {
      // const preuser = await User.findOne({ email: email });
      res.status(200).json({success:"Otp Matched"})
    } else {
      res.status(400).json({ error: "Invalid Otp" })
    }
  } catch (error) {
    res.status(400).json({ error: "Invalid Details", error })
  }
}


// module.exports.userverify = async (req, res) => {
//   const { email, otp } = req.body;

//   if (!otp || !email) {
//     return res.status(400).json({ error: "Please Enter Your OTP and email" });
//   }

//   try {
//     const otpVerification = await userotp.findOne({ email });

//     if (!otpVerification) {
//       return res.status(400).json({ error: "OTP not found for this email" });
//     }

//     if (otpVerification.otp === otp) {



//     } else {
//       return res.status(400).json({ error: "Failed to register user" });
//     }
//   } else {
//     return res.status(400).json({ error: "Invalid OTP" });
//   }
// } catch (error) {
//   return res.status(400).json({ error: "Invalid Details", error });
// }
// };

