require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes");
const session = require("express-session");

const app = express();
const PORT = 8080;

//
app.use(helmet());
app.use(morgan("dev"));
app.use(cors({credentials: true, origin: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static());
app.use(express.urlencoded({extended: true}))
app.use(express-session)
app.use("/api/books", bookRoutes);
app.use("/api/auth", authRoutes);
app.listen(console.log(`The server is listening on port ${PORT}`));

module.exports();
