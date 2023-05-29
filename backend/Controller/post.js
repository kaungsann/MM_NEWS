const postDb = require("../Model/post");
const commentDb = require("../Model/comment");

const { helper } = require("../Library/helper");

const Allpost = async (req, res, next) => {
  const results = await postDb
    .find()
    .populate("user tag category", "-password");
  helper(res, "all post ", results);
};
const sendPost = async (req, res, next) => {
  // let userId = req.body.user._id;
  // delete req.body.user;
  // req.body.user = userId;
  let results = await new postDb(req.body).save();
  helper(res, "save post", results);
};

const getOnePost = async (req, res, next) => {
  let post = await postDb.findById(req.params.id);
  // let comment = await commentDb.findById({ postId: post._id });
  // post = post.toObject();
  // post.comment = comment;
  if (post) {
    helper(res, "One Post ", post);
  } else {
    next(new Error("POst ID doesn't exist"));
  }
};

const editPost = async (req, res, next) => {
  let postId = await postDb.findById(req.params.id);
  if (postId) {
    await postDb.findByIdAndUpdate(postId._id, req.body);
    let results = await postDb.findById(postId._id);
    helper(res, "edit post", results);
  } else {
    next(new Error("you don't have with that id"));
  }
};

const deletPost = async (req, res, next) => {
  let postId = await postDb.findById(req.params.id);
  if (postId) {
    console.log("its working");
    await postDb.findByIdAndDelete(postId._id);
    helper(res, "delete post");
  } else {
    next(new Error("you don't have with that id"));
  }
};

const byTag = async (req, res, next) => {
  let findId = await postDb.find({ tag: req.params.id });
  if (findId) {
    helper(res, "all tag post", findId);
  } else {
    next(new Error("you don't have with that id"));
  }
};
const bycategory = async (req, res, next) => {
  let findByCat = await postDb.find({ category: req.params.id });
  if (findByCat) {
    helper(res, "all category", findByCat);
  } else {
    next(new Error("you don't have with that id"));
  }
};

module.exports = {
  Allpost,
  sendPost,
  getOnePost,
  editPost,
  deletPost,
  byTag,
  bycategory,
};
