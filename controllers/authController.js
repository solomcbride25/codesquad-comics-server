const passport = require('passport')
const bcrypt = require('bcrypt');
const { request } = require('express');

const register = async (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;
  console.log(req.body);
  try {
    const newUser = { firstName, lastName, username, password };
    console.log("The code is operational");
    res.status(201).json({
      success: true,
      message: "New user is created",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Internal server error!",
    });
  }
};

const login = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "User logged in",
  });
};

const loginLocal = (req, res, next) => {
  passport.authenticate("local", async (err, user, info)) 
  try {
    if (error) return next (err);
    
    if (!user) {
      return res.status(401).json({
        message: info?.message || "Authentication failed",
        statusCode: 401,
      });
     }
     req.login (user, (err) => {
      if (err) return next (err);

      const userCopy = user.toObject();
      userCopy.password = undefined;

  return res.status(200).json({
    message: "Login successful",
    statusCode: 200,
    data: {user: userCopy},
  });
});

  } catch (error) {
    next(err);
    (req,res,next);
  }
} 


const logout = async (req, res, next) => {
  console.log("Initializing logout controller logic...");
  res.clearCookie("connect.sid", { path: "/" });
  res.status(200).json({
    message: "User logging out",
  });
  function sessionDestruction(err) {
    //error handling as a final check and a failsafe
    if (err) {
      return next(err);
      console.log("Logout function activated. Logging out...");
    }
  }
  sessionDestruction();
};

const logoutRequest = async (req, res, next) => {
  if (err) {
    return next(err);
  } else {sessionDestruction();
  res.clearCookie("connect.sid", { path: "/" });
  res.status(200).json({
    success: true,
    statusCode: 200
  })
}
}

const signupRequest = async (req, res, next) => {
  const {firstName, lastName, username, password, googleId, githubId} = req.body;
  if (!firstName || !username || !password) {
    return res.status(400).json({
      message: "First name, username, and password are required.",
      statusCode: 400,
    })
  }};;
  
  try {
    const hashedPassword = async (req, res, next) => { await bcrypt.hash(password, 10);
    const newUser = new User ({
      firstName,
      lastName,
      username,
      password: hashedPassword,
      googleId,
      githubId,
    })
  }
  
const newUser = async (req, res, next) => {
await newUser.save();
  req.login(newUser, (err) => {
    if (err) return next(err);
  })
};

  const userCopy = newUser.toObject();
  userCopy.password = undefined;

  return res.status(201).json({
    message: "Signup successful",
    statusCode: 201,
    data: {user: userCopy},
  });
} catch (err) {
  next(err);
}

module.exports = {
  login,
  register,
  logout,
  loginLocal,
  signupRequest
}