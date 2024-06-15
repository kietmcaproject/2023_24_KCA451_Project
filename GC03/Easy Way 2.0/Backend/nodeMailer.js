const express = require('express');
const sendMail = require('./controllers/sendMail');
const app = express();

let PORT = 5000;

app.get("/", (req, res) => {
    res.send("Response from server");
});

app.post("/sendmail", sendMail());

const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log("Server is running on port:5000");
        });
    }
    catch(err){
        console.log(err);
    }
};

start(); 