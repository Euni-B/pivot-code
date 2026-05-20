// import express 
const express = require('express');
const fs = require("fs");

// create app
const app = express();

app.use(express.json());

// POST route
app.post("/login", (req, res) => {

  // Grab data from request body
  const userData = req.body;

  // Save to file
  fs.writeFileSync(
    "users.txt",
    JSON.stringify(userData, null, 2)
  );

  // Send response
  res.send("Login information saved!");
});

// get info
app.get("/", (req,res)=> {
res.send("Welcome to the best database in the world!!!!")
})


// Route 2 - About
app.get("/about", (req, res) => {
  res.send("About page");
});


// Route 3 contact page
app.get("/contact", (req, res) => {
  res.send("Contact us!!!");
});

// Route 4 - Users
app.get("/users/:id", (req, res) => {
  console.log("Params:", req.params)
  res.json({
    userId: req.params.id
  })
})

// create server on port 3000
app.listen(3000, ()=> {
    console.log("\x1b[34mhttp://localhost:3000\x1b[0m")
});