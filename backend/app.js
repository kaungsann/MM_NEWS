require("dotenv").config();

const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const fileupload = require("express-fileupload");

const mongoose = require("mongoose");
//mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);
mongoose
  .connect(process.env.DATADASE)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const userRouter = require("./Router/userRouer");
const categoryRouter = require("./Router/category");
const permitRouter = require("./Router/permit");
const roleRouter = require("./Router/role");
const tagRouter = require("./Router/tag");
const postRouter = require("./Router/post");
const commentRouter = require("./Router/comment");

app.use(express.json());
app.use(cors());
app.use(fileupload());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/permit", permitRouter);
app.use("/role", roleRouter);
app.use("/tag", tagRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

const defaultUser = async () => {
  let migrate = require("./Migration/migrate");
  // migrate.roleAndPermitMigrate();
  // migrate.addOwerRole();
  //migrate.addPermitRole();
};
//defaultUser();

app.get("*", (req, res, next) => {
  res.send({
    message: "No Route Found",
  });
});

app.use((err, req, res, next) => {
  err.status = err.status || 504;
  res.status(err.status).json({
    con: false,
    message: err.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port on ${process.env.PORT}`);
});
