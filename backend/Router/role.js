const roleRouter = require("express").Router();

const roleController = require("../Controller/role");

const { AddRoleSchema, permitSchema } = require("../Library/Schema");
const { validBody } = require("../Library/valid");

roleRouter.get("/", roleController.allRole);
roleRouter.post("/", validBody(permitSchema), roleController.postRole);

//oleRouter.post("/addrole", validBody(AddRoleSchema), roleController.addRole);
roleRouter.post(
  "/addrole/:id",

  roleController.addRole
);
roleRouter.post(
  "/removerole",

  roleController.RemoveRole
);
roleRouter.post(
  "/removeroles/:id",

  roleController.clickRemoveRole
);
roleRouter.post(
  "/addroles/:id",

  roleController.clickAddRole
);

roleRouter
  .route("/:id")
  .get(roleController.getOneRole)
  .patch(validBody(permitSchema), roleController.editRole)
  .delete(roleController.deleteRole);

module.exports = roleRouter;
