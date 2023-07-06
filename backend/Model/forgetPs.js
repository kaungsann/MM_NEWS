const mongoose = require("mongoose");

const { Schema } = mongoose;

const fgUser = new Schema({
  email: { type: String, required: true },
  password: { type: String },
  resetToken: { type: String },
  resetTokenExpiration: { type: Date },
});

const forgetPassword = mongoose.model("forgetPw", fgUser);

module.exports = forgetPassword;
