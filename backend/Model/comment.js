const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: "post", required: true },
  image: { type: String },
  text: { type: String },
  create: { type: Date, default: Date.now },
});

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
