const express = require('express');
const { connect } = require('mongoose');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();
const connectDb = require('./config/dbConnection');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const sendMail = require('./controllers/sendMail');
const cors = require('cors');


connectDb();
const app = express();
app.use(cors());
const PORT = process.env.PORT  || 5000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/users", require('./routes/userRoutes'));
app.use("/api/workers", require('./routes/workerRoutes'));
app.use("/api/verification", require('./routes/verificationRoutes'));
app.use("/api", require('./routes'));
app.use("/api/admin",require('./routes/admin'))
// sendMail("abhimynew@gmail.com", 12345);
app.use(errorHandler);
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});




