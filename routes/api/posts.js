const express = require("express");
const router = express.Router();
const Post = require("../../models/post");
const config = require("config");

//@route GET api/posts
//@desc Get all Posts
//@acess Public

router.get("/", (req, res) => {
  Post.find()
    .then(posts => res.send(posts))
    .catch(err => res.send(err));
});

//@route POST api/posts
//@desc create post
//@acess Public

router.post("/", (req, res) => {
  const { text } = req.body;
  const newPost = new Post({ text });

  newPost
    .save()
    .then(post => res.send(post))
    .catch(err => res.send(err));
});

//@route DELETE api/posts
//@desc delete post
//@acess Public

router.delete("/:id", (req, res) => {
  Post.deleteOne({ _id: req.params.id })
    .then(post => res.send(post))
    .catch(err => res.send(err));
});

module.exports = router;
