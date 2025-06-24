const express = require("express");
const passport = require('passport');
const router = express.Router();

const {
  login,
  register,
  loginLocal,
  logoutRequest,
  signupRequest
} = require("../controllers/authController.js");

router.post("/register", register);

router.get("/login", login);

router.get("/loginlocal/error", (req, res) => {
  res.status(401).json({ success: false, message: "Login error" });
});

router.post("/loginlocal", loginLocal);

router.post("/signup", signupRequest)


router.post("/logout", logoutRequest);

router.get("/unauthenticated", (req, res) => {
  console.log("Returning to the homepage...");
  res.redirect("/");
});

module.exports = router;
