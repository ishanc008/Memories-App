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

router.route("/:id").delete((req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json(req.params.id))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/like/:id").patch((req, res) => {
    const id = req.params.id;
    Post.findOneAndUpdate({ _id: id }, { $inc: { "likeCount": 1 } }, { new: true }, (err, updatedPost) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(updatedPost);
        }
    })
})

router.route("/:id").patch((req, res) => {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with this id");

    const post = req.body

    Post.findByIdAndUpdate(_id, post, { new: true }, (err, updatedPost) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(updatedPost);
        }
    });

})

module.exports = router