const postRouter = require("express").Router();
const { validToken, validBody } = require("../Library/valid");
const { saveFile } = require("../Library/gallery");
const { PostSchema } = require("../Library/Schema");

const postController = require("../Controller/post");

postRouter.get("/", postController.Allpost);
postRouter.get("/bytag/:id", postController.byTag);

postRouter.get("/paginate/:pages", postController.paginate);

postRouter.post(
  "/",
  validToken,
  saveFile,
  validBody(PostSchema),
  postController.sendPost
);
postRouter.post("/like/toggle/:id/:page",validToken , postController.toggleLike);
postRouter.get("/like/add/:id", validToken, postController.addLike);
postRouter.post("/comment/:id", validToken, postController.postComment);
postRouter.post(
  "/comment/delete/:id",
  validToken,
  postController.commentDelete
);

postRouter
  .route("/:id")
  .get(postController.getOnePost)
  .patch(saveFile, postController.editPost)
  .delete(postController.deletPost);
module.exports = postRouter;
