// import express 
const express = require('express');
// import file system
const fs = require("fs");
// allow frontend communication
const cors = require("cors");

// create app
const app = express();
// ability to parse JSON
app.use(express.json());
app.use(cors());


// ---------ROUTES BEGIN----------

//Route 1 get info
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Eunice's database!"
  })
})



// Route 2 display all users
app.get("/users", (req, res) => {
  const filePath = "users.json";

  try {
    // if file doesn't exist, return empty list
    if (!fs.existsSync(filePath)) {
      return res.status(200).json([]);
    }

    const data = fs.readFileSync(filePath, "utf8");
    const users = data ? JSON.parse(data) : [];

    return res.status(200).json(users);

  } catch (error) {
    return res.status(500).json({
      error: "Server error."
    });
  }
});

// Route 3- Users
app.get("/users/:id", (req, res) => {
  console.log("Params:", req.params)
  res.json({
    userId: req.params.id
  })
})


//Route 4 POST register route
app.post("/register", (req, res) => {

  // Grab data from request body
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  const filePath = "users.json";


  // read existing users from file
  let users = [];


  // check if the file exists, parse from JSON
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf8");
    users = data ? JSON.parse(data) : [];
  }
  // add new users
  users.push({ username, password });

  // Save to file
  fs.writeFileSync(
    filePath, JSON.stringify(users, null, 2)
  );

  // Send response
  res.status(201).json({ message: "Login information saved!" });
});

//Route 5 POST login route, check if they exist, correct password
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required."
    });
  }

  const filePath = "users.json";

  try {
    // If no file, no users exist
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        message: "No users found."
      });
    }

    // Read users
    const data = fs.readFileSync(filePath, "utf8");
    const users = data ? JSON.parse(data) : [];

    // Find user
    const user = users.find(u => u.username === username);

    if (!user) {
      return res.status(404).json({
        message: "User not found."
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        message: "Incorrect password."
      });
    }

    return res.status(200).json({
      message: "Login successful!"
      

    });

  } catch (err) {
    return res.status(500).json({
      message: "Server error."
    });
  }
});

//Route 6 delete route
app.delete("/users/:username", (req, res) => {
  const { username } = req.params;

  const filePath = "users.json";

  try {
    // if file doesn't exist, nothing to delete
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        error: "No users file found."
      });
    }

    // read existing users
    const data = fs.readFileSync(filePath, "utf8");
    let users = data ? JSON.parse(data) : [];

    // check if user exists
    const userExists = users.some(user => user.username === username);

    if (!userExists) {
      return res.status(404).json({
        error: "User not found."
      });
    }

    // REMOVE the user (this is the actual delete step)
    const updatedUsers = users.filter(
      user => user.username !== username
    );

    // overwrite file with updated data
    fs.writeFileSync(
      filePath,
      JSON.stringify(updatedUsers, null, 2)
    );

    return res.status(200).json({
      message: `User '${username}' deleted from database.`
    });

  } catch (error) {
    return res.status(500).json({
      error: "Server error."
    });
  }
});


// create server on port 3000
app.listen(3000, () => {
  console.log("\x1b[34mhttp://localhost:3000\x1b[0m")
});