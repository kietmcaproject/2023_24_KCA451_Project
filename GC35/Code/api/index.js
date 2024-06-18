const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");
const commentModel = require("./models/Comment");
const bcrypt = require("bcryptjs");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const nodemailer = require("nodemailer");
require("dotenv").config();

const salt = bcrypt.genSaltSync(10);
const secret = "qwertuiofalfsd";

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

// app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("connected successfully!!");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
// const PORT=3000;

// app.listen(3000,()=>{
//   console.log(`app started at 3000`);
// })

// app.get("/",(req,res)=>{
//   res.send("welcome blog mca");
// })

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create(
      {
        username,
        password: bcrypt.hashSync(password, salt),
      },
      { new: true }
    );
    res.json(userDoc);
  } catch (e) {
    console.log(e.message + "hyfhfrh");
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(password);
  const userDoc = await User.findOne({ username });
  console.log(userDoc);
  // console.log(userDoc.password+""+userDoc.username);
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      });
    });

    console.log("login success!!");
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) {
      throw err;
      console.log(err);
    }
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc);
  });
});
app.delete("/delete/:id", async (req, res) => {
  try {
    console.log("in the delete method index.js");
    const { id } = req.params;
    console.log("id" + id);
    var postDelete = await Post.findByIdAndDelete({ _id: id });
    console.log(postDelete + "dlt");

    if (!postDelete) {
      return res.json({ msg: "not available" });
    }
    res.status(200).json({
      success: true,
      message: `${id} deleted successfully!!`,
    });
  } catch (error) {
    console.log(error);
    res.status(505).json({
      success: false,
      message: "internal server error",
    });
  }
});

app.put("/post", uploadMiddleware.single("file"), async (req, res) => {
  console.log("put called 1");
  let newPath = null;
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    // const postDoc = await Post.findById(id);
    // const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    // if (!isAuthor) {
    //   return res.status(400).json('you are not the author');
    // }
    console.log("put callled again!");
    const postDoc = await Post.findByIdAndUpdate(id, {
      title,
      summary,
      content,
      cover: newPath ? newPath : null,
    });
    if (!postDoc) {
      return res.status(404).json("Post not found");
    }

    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json("You are not the author");
    }

    if (newPath) {
      postDoc.cover = newPath;
    }

    // alert("sucesss update!");
    // Save the updated post document
    await postDoc.save();
    console.log("put callled 3");

    // Respond with success message or updated document if needed
    // return res.status(200).json(postDoc);
    // old code
    // await postDoc.update({
    //   title,
    //   summary,
    //   content,
    //   cover: newPath ? newPath : postDoc.cover,
    // });
    res.json(postDoc);
  });
});

app.get("/post", async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
});

app.get("/post/:id", async (req, res) => {
  console.log("in post method index.js");
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

// comment route
app.post("/comment/:id", async (req, res) => {
  //console.log(req.body);
  console.log("index.js comment route");
  const result = await commentModel.create({
    content: req.body.content,
    blogId: req.params.id,
    createdBy: req.body._id,
  });

  return res.status(201).json({ msg: "inserted successfully!" });
});

app.get("/comments/:id", async (req, res) => {
  const { id } = req.params;
  // console.log("resonse",id);
  const response = await commentModel.find({ blogId: id });
  return res.json(response);
});

app.listen(4000);

//
