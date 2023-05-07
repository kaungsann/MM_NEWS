const userRouter = require("express").Router();
const { registerSchema, loginSchema, idSchema } = require("../Library/Schema");
const { validBody, validParams } = require("../Library/valid");
const userControlller = require("../Controller/user");

userRouter.get("/", userControlller.getAll);
userRouter.post(
  "/register",
  validBody(registerSchema),
  userControlller.registerUser
);
userRouter.post("/login", validBody(loginSchema), userControlller.LoginUser);

userRouter
  .route("/:id")
  .get(validParams(idSchema, "id"), userControlller.getOne)
  .patch(validParams(idSchema, "id"), userControlller.editUser)
  .delete(validParams(idSchema, "id"), userControlller.deleteUser);

module.exports = userRouter;
