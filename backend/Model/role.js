const mongoose = require("mongoose");

const { Schema } = mongoose;

const roleSchema = new Schema({
  name: { type: String, required: true, unique: true },
  permitId: { type: Schema.Types.ObjectId, ref: "permit" },
  create: { type: Date, default: Date.now },
});

const role = mongoose.model("role", roleSchema);

module.exports = role;
