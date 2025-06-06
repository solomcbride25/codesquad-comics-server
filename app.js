const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 8080;

//
app.use(helmet());
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static());
app.use("/api/books", bookRoutes);
app.use("/api/auth", authRoutes);

app.listen(console.log(`The server is listening on port ${PORT}`));

module.exports();
