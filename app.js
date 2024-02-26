const express = require('express');
const app = express();
const mongoose = require('mongoose') ;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


//Connection to the data base with mongoose 
//then and catch called promise 

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


