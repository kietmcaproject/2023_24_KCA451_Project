const express = require('express');
const {sendMail, verifyOtp} = require("../controllers/verification");

const router = express.Router();

router.route("/sendMail").post(sendMail);
router.route("/verifyOtp").post(verifyOtp);

module.exports = router;
