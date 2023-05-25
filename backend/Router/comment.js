const commentRouter = require("express").Router();

const commentController = require("../Controller/comment");

commentRouter.get("/", commentController.allComment);

module.exports = commentRouter;
