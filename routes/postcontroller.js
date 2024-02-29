const express = require('express');
const router = express.router() ;
const Post = require("../models/post.js");

router.get('/allposts', async(req,res) => {
   const posts = Post.find() ;
   res.json(posts).status(200);

} )