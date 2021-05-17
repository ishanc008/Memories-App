import express from "express"
import mongoose from "mongoose"
import auth from "../middleware/auth.js"
import Post from "../Models/postModel.js"

const router = express.Router();

router.get("/", (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json("Error: " + err))
})

router.post("/add", auth, (req, res) => {
    const { title, message, tags, selectedFile, name } = req.body;
    const newPost = new Post({
        title,
        message,
        tags,
        name,
        selectedFile,
        creator: req.userId,
        createdAt: new Date().toISOString()
    })

    newPost.save()
        .then(() => res.json(newPost))
        .catch(err => res.status(400).json("Error: " + err))
})

router.delete("/:id", (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.json(req.params.id))
        .catch(err => res.status(400).json("Error: " + err))
})

router.patch("/like/:id", auth, async (req, res) => {
    const id = req.params.id;
    if (!req.userId) {
        return res.json({ message: "Unauthenticated" });
    }

    const post = await Post.findById(id);
    const index = post.likes.findIndex((id) => id === String(req.userId));
    if (index === -1) {
        post.likes.push(req.userId);
    }
    else {
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true });

    res.status(200).json(updatedPost);
})

router.patch("/:id", (req, res) => {
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

export default router;