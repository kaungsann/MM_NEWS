const categoryRouter = require("express").Router();

const categoryController = require("../Controller/category");
const { validBody, validParams } = require("../Library/valid");
const { categorySchema, idSchema } = require("../Library/Schema");
const { saveFile } = require("../Library/gallery");

categoryRouter.get("/", categoryController.allCategory);
categoryRouter.post(
  "/",
  saveFile,
  validBody(categorySchema),
  categoryController.addCategory
);
categoryRouter
  .route("/:id")
  .get(validParams(idSchema, "id"), categoryController.categoryOne)
  .patch(validParams(idSchema, "id"), saveFile, categoryController.pathCategory)
  .delete(validParams(idSchema, "id"), categoryController.deleteCategory);

module.exports = categoryRouter;
