const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose') ;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


//Connection to the data base with mongoose 
//then and catch called promise 
const mongoDBUrl = "mongodb+srv://kacemmeherzi:kacem1920@cluster0.yoteyu8.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoDBUrl)
  .then(() => {
    console.log("Connected to MongoDB");
    
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });


