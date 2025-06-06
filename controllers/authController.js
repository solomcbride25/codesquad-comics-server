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

const localLogin = async (req, res, next) => {
  const result = true;
  function mockPassport(err, user) {
    if (err) {
      return next(err);
    }
  }
  mockPassport();
  json({
    success: true,
    message: "Login successful...",
  });
};
