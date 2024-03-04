const mongoose = require('mongoose')  ;
const bcrypt = require('bcryptjs') ;


const postshema = new mongoose.Schema ( {
    title : {type : String ,unique  : false,required :true } ,body : {type :String, unique: false, required  : true} ,
    author : {type : mongoose.Schema.Types.ObjectId, ref : "User"}
},{collation: "posts", collation: { locale: 'en_US', strength: 1 } }
)
const Post = mongoose.model ('Post',postshema) ;
module.exports= Post ; 
