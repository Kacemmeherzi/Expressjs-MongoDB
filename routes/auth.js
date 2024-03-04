const express = require('express');
const bcrypt = require('bcryptjs') ; 
const User = require('../models/user.js') ;
const router = express.Router() ; 
const jwt = require ('../jwt/jwtUtils.js')


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

router.post('/login', async (req, res) => {
    try {
const {username,password} = req.body ;
const user = await User.findOne({username:username});

const valid= await  bcrypt.compare(password,user.password) ;

      if (user&&valid) {
      const token = jwt.generateToken(user) ;
       res.status(200)
      .json({"token":token})
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }})

module.exports = router ;