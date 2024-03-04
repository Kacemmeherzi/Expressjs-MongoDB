const express = require('express');
const app = express();
const mongoose = require('mongoose') ;
const dotenv = require('dotenv') ;
app.use(express.json()) ;
const authcontroller = require("./routes/auth.js");
const postcontroller  = require("./routes/postcontroller.js") ;
const jwtmiddleware = require("./jwt/jwtMiddleware.js")
dotenv.config();
const MONGO_URI = process.env.MONGO_URI 
 const PORT= process.env.PORT|| 3000 ;
app.use("/auth",authcontroller) ;
app.use("/post",jwtmiddleware,postcontroller) ;

 // TODO :: login and post model with crud 
//Connection to the data base with mongoose 
//then and catch called promise 
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });


app.post  ("/aa",async(req,res)=>{
  res.send(req.body)
})

