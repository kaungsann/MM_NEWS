const postDb = require("../Model/post");
const commentDb = require("../Model/comment");

const { helper } = require("../Library/helper");

const Allpost = async (req, res, next) => {
  const results = await postDb
    .find()
    .populate("user tag category comment", "-password ");
  // .populate("user tag category", "-password");
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
  let post = await postDb
    .findById(req.params.id)
    .populate("user comment")
    .populate({
      path: "comment",
      populate: {
        path: "user",
        model: "user",
      },
    })
    .populate("category", "name");

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
  let findId = await postDb.find({ tag: req.params.id }).populate("comment");
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

const paginate = async (req, res, next) => {
  let pages = req.params.pages;
  pages === 1 ? 0 : pages - 1;
  let limit = Number(process.env.POST_LIMIT);
  let postCount = limit * pages;
  let results = await postDb
    .find()
    .limit(limit)
    .skip(postCount)
    .populate("user tag category");
  helper(res, "paginate post", results);
};

const postComment = async (req, res, next) => {
  const postId = await postDb.findById(req.params.id);
  if (postId) {
    let commentId = await new commentDb(req.body).save();
    await postDb.findByIdAndUpdate(postId._id, {
      $push: { comment: commentId._id },
    });
    let results = await postDb.findById(postId._id);
    helper(res, "post comment", results);
  } else {
    next(new Error("you don't have with that id"));
  }
};

const commentDelete = async (req, res, next) => {
  const postId = await postDb.findById(req.params.id);
  const commentId = await commentDb.findById(req.body.commentId);
  if (postId) {
    await postDb.findByIdAndUpdate(postId._id, {
      $pull: { comment: commentId._id },
    });
    let results = await postDb.findById(postId._id);
    helper(res, "post comment", results);
  } else {
    next(new Error("you don't have with that id"));
  }
};

const toggleLike = async (req, res, next) => {
  let findId = await postDb.findById(req.params.id);
  if (findId) {
    if (req.params.page == 1) {
      findId.like = findId.like + 1;
    } else {
      findId.unLike = findId.unLike + 1;
    }
    if (findId.unLike < 0) {
      findId.unLike = findId.unLike = 0;
    }

    await postDb.findByIdAndUpdate(findId._id, findId);
    let results = await postDb.findById(findId._id);
    helper(res, "toggle like", results);
  } else {
    next(new Error("you don't have with that id"));
  }
};

const addLike = async (req, res, next) => {
  console.log("add like");
  let findId = await postDb.findById(req.params.id);
  if (findId) {
    findId.like = findId.like + 1;
    await postDb.findByIdAndUpdate(findId._id, findId);
    let results = await postDb.findById(findId._id);
    helper(res, "toggle like", results);
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
  paginate,
  toggleLike,
  addLike,
  postComment,
  commentDelete,
};
