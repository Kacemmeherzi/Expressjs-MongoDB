const express = require('express');
const bcrypt = require('bcryptjs') ; 
const User = require('../models/user.js') ;
const jwt = require('jsonwebtoken') ;
const router = express.Router() ; 
