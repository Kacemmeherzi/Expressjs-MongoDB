const mongoose = require('mongoose')  ;
const bcrypt = require('bcryptjs') ; 
const userschema = new mongoose.Schema ( {
    username : {type : string ,unique  : true } ,password : String 
})

userschema.pre('save' , async function (next ){

const user = this ; 
if ( user.isModified("password")){
    user.password = await bcrypt.hash(user.password) ;
}
next();
})