const express = require("express");
const authentication = require("../middleware/authentication");
const cookieParser = require("cookie-parser");


const {addAdmin,userCount} = require('../controllers/admin');
const {requests} = require('../controllers/requestController');

const router = express.Router();
router.use(cookieParser());

router.route('/addAdmin').post(addAdmin);
router.route('/userCount').get(userCount);
router.route('/requests').get(requests);

module.exports = router;