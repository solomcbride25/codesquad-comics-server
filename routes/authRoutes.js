const express = require('express');
const router = express.router();
const { register, login, logout, localLogin } = require("../controllers/authControllers");

const { register, login, logout, localLogin} = require('../controllers/authController')

router.post('/register', register);

router.get('/login', login);

router.get('/login/error', (req, res) =>{
    res.status(401).json({success: false, message: "Login error" })
});

router.get('/login/local', localLogin)

router.get('/logout', logout);

router.get('/unauthenticated', (req, res) => {
    console.log("Returning to the homepage...");
    res.redirect('/');
});

module.exports = router;