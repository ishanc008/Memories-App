const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const postRouter = require("./Routes/postRoute");
const userRouter = require("./Routes/userRoute");

const app = express();

app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const url = process.env.ATLAS_URL;
const port = process.env.PORT || 5000;

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false });
const connection = mongoose.connection;
connection.once("open", () => console.log("Database connected"));

app.use("/posts", postRouter);
app.use("/user", userRouter);

app.listen(port, () => console.log("server running on port 5000"));