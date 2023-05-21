const mongoose = require("mongoose");

const { Schema } = mongoose;

const tagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  create: { type: Date, default: Date.now },
});

const Tag = mongoose.model("tag", tagSchema);

module.exports = Tag;
