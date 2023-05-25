const postRouter = require("express").Router();
const { validToken, validBody } = require("../Library/valid");
const { saveFile } = require("../Library/gallery");
const { PostSchema } = require("../Library/Schema");

const postController = require("../Controller/post");

postRouter.get("/", postController.Allpost);
postRouter.post(
  "/",
  validToken,
  saveFile,
  validBody(PostSchema),
  postController.sendPost
);

postRouter
  .route("/:id")
  .get(postController.getOnePost)
  .patch(postController.editPost)
  .delete(postController.deletPost);
module.exports = postRouter;
