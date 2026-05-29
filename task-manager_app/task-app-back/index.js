import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

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

// Example route for hashing password
app.post("/register", async (req, res) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ error: "Password required" });

  const hashed = await bcrypt.hash(password, 10);
  res.json({ hashedPassword: hashed });
});
app.listen(PORT, () => {
  console.log(`\x1b[36mServer running at http://localhost:${PORT}\x1b[0m`);
});