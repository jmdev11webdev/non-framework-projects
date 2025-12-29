const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../db/connection");

const router = express.Router();

const requireAuth = require("../middleware/requireAuth");

/* register */
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword]
    );

    res.json({
      success: true,
      message: "User registered successfully"
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Registration failed"
    });
  }
});

/* login */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    req.session.user = {
      id: user.id,
      email: user.email
    };

    res.json({
      success: true,
      message: "Logged in successfully"
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({
      success: false,
      message: "Login failed"
    });
  }
});

/* logout */
router.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Logout failed"
      });
    }

    res.clearCookie("connect.sid");
    res.json({
      success: true,
      message: "Logged out successfully"
    });
  });
});

/* me (protected) */
router.get("/me", requireAuth, (req, res) => {
  res.json({
    success: true,
    user: req.session.user
  });
});

module.exports = router;
