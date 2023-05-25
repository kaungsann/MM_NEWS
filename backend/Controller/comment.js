const commentDb = require("../Model/comment");
const { helper } = require("../Library/helper");

const allComment = async (req, res, next) => {
  let results = await commentDb.find();
  if (results) {
    helper(res, "all comment", allComment);
  } else {
    next(new Error(" comment doesn't have exist"));
  }
};

module.exports = {
  allComment,
};
