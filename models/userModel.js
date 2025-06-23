const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String },
  username:  { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  googleId:  { type: String },
  githubId:  { type: String },
}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);