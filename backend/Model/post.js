const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  category: { type: Schema.Types.ObjectId, ref: "category", required: true },
  tag: { type: Schema.Types.ObjectId, ref: "tag", required: true },
  comment: [{ type: Schema.Types.ObjectId, ref: "comment" }],
  image: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  likeUser: [{ type: Schema.Types.ObjectId, ref: "user" }],
  like: { type: Number, default: 0 },
  unLike: { type: Number, default: 0 },
  create: { type: Date, default: Date.now },
});

const post = mongoose.model("post", postSchema);

module.exports = post;
