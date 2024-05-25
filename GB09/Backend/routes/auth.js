const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
  tryOtp,
  userSendOtp,
  userverify
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);
router.post("/user/sendotp",userSendOtp);
router.post("/user/tryotp",tryOtp);
router.post("/user/verifyOtp",userverify);
module.exports = router;
