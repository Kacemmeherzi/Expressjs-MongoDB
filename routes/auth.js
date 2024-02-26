const express = require('express');
const bcrypt = require('bcryptjs') ; 
const User = require('../models/user.js') ;
const jwt = require('jsonwebtoken') ;
const router = express.Router() ; 


router.post('/registre',async (req, res)=>
{
try {
    const {username,password}= req.body ;
    const user = new User ({username,password})
    await user.save() ;
    res.status(201).send('User created ');
}catch (error) {
    res.status(400).send(error.message) ; 
}

})