const { Router } = require("express");
const express = require("express");
const {userFeedback_controller, userFeadback_featch} = require("../controllers/userFeedback.js");
const cookieParser = require("cookie-parser");
const {userProfile, userLogin,contactUs} = require('../controllers/index.js')

const router = express.Router();
router.use(cookieParser());

router.route("/feedback").post(userFeedback_controller)
                        .get(userFeadback_featch);

router.route("/login").post(userLogin)
router.route("/profile/:id").get(userProfile)

router.route("/contactUs").post(contactUs);

module.exports = router;