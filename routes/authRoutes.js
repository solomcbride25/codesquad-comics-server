const express = require("express");
const passport = require('passport');
const router = express.Router();

const {
  register,
  login,
  logout,
  localLogin,
  signupRequest,
} = require("../controllers/authController");

router.post("/register", register);

router.get("/login", login);

router.get("/login/error", (req, res) => {
  res.status(401).json({ success: false, message: "Login error" });
});

router.post("/login/local", localLogin);

router.post("/signup", signupRequest)


router.post("/logout", logout);

router.get("/unauthenticated", (req, res) => {
  console.log("Returning to the homepage...");
  res.redirect("/");
});

module.exports = router;
