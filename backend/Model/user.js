const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = Schema({
  name: { type: String, required: true, unquie: true },
  email: { type: String, required: true, unquie: true },
  phone: { type: String, required: true, unquie: true },
  password: { type: String, required: true },
  create: { type: Date, default: Date.now },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
