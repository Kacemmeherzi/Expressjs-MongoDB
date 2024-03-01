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
     res.json('created')
    }catch(error){
        res.json(error.message)
    }
})
router.get('/:id',async( req ,res) => {

    try {
const postid = req.params.id ;
var post = await Post.findById(postid)
if (post!= undefined)
{res.json(post).status(200)}

        
    
    }catch(error){
        res.json(error.message).status(404)
    }

})

router.put("/update/:id", async (req, res)=>{
    try{
        const {id} = req.params;
        const {title, body} = req.body;
        const updatePost = await Post.findByIdAndUpdate(id,{title,body},{new:false});
        res.send(updatePost);
    }catch(error){
        res.status(400).send(error.message);
    }
})



module.exports= router ;