const permitRoute = require("express").Router();

const permitController = require("../Controller/permit");
const { permitSchema } = require("../Library/Schema");
const { validBody } = require("../Library/valid");

permitRoute.get("/", permitController.allPermit);
permitRoute.post("/", validBody(permitSchema), permitController.postPermit);

permitRoute
  .route("/:id")
  .get(permitController.getOnePermit)
  .patch(validBody(permitSchema), permitController.editPermit)
  .delete(permitController.deletePermit);

module.exports = permitRoute;
