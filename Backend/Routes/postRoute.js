const router = require("express").Router();
const mongoose = require("mongoose");
let Post = require("../Models/postModel");

router.route("/").get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
    const { title, message, creator, tags, selectedFile } = req.body;
    const newPost = new Post({
        title,
        message,
        creator,
        tags,
        selectedFile
    })

    newPost.save()
        .then(() => res.json(newPost))
        .catch(err => res.status(400).json("Error: " + err))
})