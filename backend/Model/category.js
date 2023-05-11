const mongoose = require("mongoose");

const { Schema } = mongoose;

const categorySchema = Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  text: { type: String },
  create: { type: Date, default: Date.now },
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
