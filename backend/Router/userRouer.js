const userRouter = require("express").Router();
const {
  registerSchema,
  loginSchema,
  idSchema,
  PasswordSchema,
} = require("../Library/Schema");
const { validBody, validParams } = require("../Library/valid");
const userControlller = require("../Controller/user");
const forgetPsController = require("../Controller/forgetPs");

userRouter.get("/", userControlller.getAll);
userRouter.post(
  "/register",
  validBody(registerSchema),
  userControlller.registerUser
);
userRouter.post("/login", validBody(loginSchema), userControlller.LoginUser);

userRouter.post("/forget-password", forgetPsController.userForgetPassword);

userRouter.post(
  "/reset-password/:id",
  validBody(PasswordSchema),
  forgetPsController.userResetPassword
);

userRouter
  .route("/:id")
  .get(validParams(idSchema, "id"), userControlller.getOne)
  .patch(validParams(idSchema, "id"), userControlller.editUser)
  .delete(validParams(idSchema, "id"), userControlller.deleteUser);

module.exports = userRouter;
