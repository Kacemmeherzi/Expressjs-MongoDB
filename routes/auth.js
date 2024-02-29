const express = require('express');
const bcrypt = require('bcryptjs') ; 
const User = require('../models/user.js') ;
const jwt = require('jsonwebtoken') ;
const router = express.Router() ; 


router.post('/register',async (req, res)=>
{
    

try {
    const username = req.body.username 
    const password = req.body.password 
    console.log(username,password)
    const user = new User ({username,password})
    await user.save() ;
    res.status(201).send('User created ');
}catch (error) {
    res.status(400).send(error.message) ; 
}

})

router.post('/login', async(req,res) => {
    try {
        const { username, password } = req.body;
      

     const user =  await User.findOne({username,password})
        
     if (!user) {res.json("invalid credentials").status(403)}
     else {
     res.json("connected").status(200)}
    }catch(error){
        res.json(error.message).status(403)
    }

} )

module.exports = router ;