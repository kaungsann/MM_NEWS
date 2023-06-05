const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  postId: { type: Schema.Types.ObjectId, ref: "post" },
  image: { type: String },
  text: { type: String },
  create: { type: Date, default: Date.now },
});

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
