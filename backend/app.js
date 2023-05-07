require("dotenv").config();

const express = require("express");

const app = express();

const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

const userRouter = require("./Router/userRouer");
app.use(express.json());
app.use("/user", userRouter);

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
