const tagRouter = require("express").Router();
const tagController = require("../Controller/tag");

const {} = require("../Library/valid");
tagRouter.get("/", tagController.getTagALL);
tagRouter.post(
  "/",
  //   validTOken(),
  //   hasAnyRole(["OWER", "Manager", "SUPERVISOR"]),
  //   hasAnyPermit(["CREATE", "DELETE", "EDIT"]),
  //   saveFile,
  tagController.addTag
);

tagRouter
  .route("/:id")
  .get(tagController.getTagSingle)
  .patch(
    // validTOken(),
    // hasAnyRole(["OWER", "Manager", "SUPERVISOR"]),
    // hasAnyPermit(["CREATE", "DELETE", "EDIT"]),
    tagController.editTag
  )
  .delete(
    // validTOken(),
    // hasAnyRole(["OWER", "Manager", "SUPERVISOR"]),
    // hasAnyPermit(["CREATE", "DELETE", "EDIT"]),
    tagController.dropTag
  );

module.exports = tagRouter;
