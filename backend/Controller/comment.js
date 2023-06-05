const commentDb = require("../Model/comment");
const { helper } = require("../Library/helper");

const allComment = async (req, res, next) => {
  let results = await commentDb.find({ postId: req.params.id });
  if (results) {
    helper(res, "all comment", results);
  } else {
    next(new Error(" comment doesn't have exist"));
  }
};

module.exports = {
  allComment,
};
