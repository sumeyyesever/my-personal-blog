const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const multer = require("multer");

app.use(express.json());
dotenv.config();


mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL).then(console.log("connected to MongoDB")).catch((err)=> console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "images");
    },
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("file has been uploaded.")
});

app.use("/api/posts", postRoute);
app.use("/api/categories", catRoute);

app.listen("5000", ()=>{
    console.log("running..");
});

