const roleRouter = require("express").Router();

const roleController = require("../Controller/role");

const { AddRoleSchema, permitSchema } = require("../Library/Schema");
const { validBody } = require("../Library/valid");

roleRouter.get("/", roleController.allRole);
roleRouter.post("/", validBody(permitSchema), roleController.postRole);

roleRouter.post("/", validBody(AddRoleSchema), roleController.addRole);
roleRouter.post("/", validBody(AddRoleSchema), roleController.RemoveRole);

roleRouter
  .route("/:id")
  .get(roleController.getOneRole)
  .patch(validBody(permitSchema), roleController.editRole)
  .delete(roleController.deleteRole);

module.exports = roleRouter;
