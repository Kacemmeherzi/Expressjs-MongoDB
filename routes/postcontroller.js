const express = require('express');
const router = express.Router() ;
const Post = require("../models/post.js");

router.get('/allposts', async(req,res) => {
   const posts = await  Post.find() ;
   res.json(posts).status(200);

} )

router.post('/addpost',async(req ,res) => {

    try {
const {title , body } = req.body ;
    const post = new Post({title,body})
     await post.save() ;
     res.json({"message": "created", post})
    }catch(error){
        res.json(error.message)
    }
})
router.get('/:id',async( req ,res) => {

    try {
const postid = req.params.id ;
var post = await Post.findById(postid)
if (post!= undefined)
{res.status(200).json(post)}

        
    
    }catch(error){
        res.status(404).json(error.message)
    }

})

router.put("/update/:id", async (req, res)=>{
    try{
        const postid = req.params.id ;
        const data = req.body;

        const post = await Post.findById(postid);
        console.log (data)
        if (post){
            const updatePost = await Post.findByIdAndUpdate(postid,data,{new:true});

            res.json(updatePost).status(200);}
            else{res.status(404).json("id not found ...")}
    }catch(error){
        res.status(400).send(error.message);
    }
})
router.delete("/delete/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        const post = await Post.findById(id);
        if (post){
        const deletedpost = await Post.findByIdAndDelete(id);
        res.status(200).json(deletedpost);}
        else{res.status(404).json("id not found")}
    }catch(error){
        res.status(400).send("bad request",error.message);
    }
})




module.exports= router ;