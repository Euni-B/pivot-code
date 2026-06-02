import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import fs from "fs";

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON request bodies

// Test route
app.get("/", (req, res) => {
  res.json({ message: "hello from backend!" });
});

// REGISTER ROUTE - POST /register

app.post("/register", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({
      error: "Email and password are required."
    });
  }

  const filePath = "./users.json";

  try {
    // Read existing users
    let users = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");

      if (data) {
        users = JSON.parse(data);
      }
    }

    // Check if email already exists
    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      return res.status(409).json({
        error: "Username already exists."
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: Date.now(),
      email,
      password: hashedPassword
    };

    // Save user
    users.push(newUser);

    fs.writeFileSync(
      filePath,
      JSON.stringify(users, null, 2)
    );

    return res.status(201).json({
      message: "User registered successfully."
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Server error."
    });
  }
});
// END REGISTER ROUTE 

// begin login route 
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const filePath = "./users.json";

  try {
    if (!fs.existsSync(filePath)) {
      return res.status(400).json({ error: "No users found." });
    }

    const data = fs.readFileSync(filePath, "utf8");
    const users = JSON.parse(data);

    const user = users.find((u) => u.email === email);

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    return res.json({ message: "Login successful!" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});
// end login route

app.listen(PORT, () => {
  console.log(`\x1b[36mServer running at http://localhost:${PORT}\x1b[0m`);
});