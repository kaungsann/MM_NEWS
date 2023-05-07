const userDB = require("../Model/user");
const { helper, encode, token, comparePassword } = require("../Library/helper");
const getAll = async (req, res, next) => {
  let results = await userDB.find();
  helper(res, "all user data ", results);
};

const registerUser = async (req, res, next) => {
  const name = await userDB.findOne({ name: req.body.name });
  const findEmail = await userDB.findOne({ email: req.body.email });
  const findPhone = await userDB.findOne({ phone: req.body.phone });
  if (name) {
    next(new Error("Name is already in use"));
  }
  if (findEmail) {
    next(new Error("Email is already in use"));
  }
  if (findPhone) {
    next(new Error("Phone is already in use"));
  }
  req.body.password = encode(req.body.password);
  const results = await new userDB(req.body).save();
  helper(res, "user register ", results);
};

const LoginUser = async (req, res, next) => {
  const findEmail = await userDB.findOne({ email: req.body.email });
  if (findEmail) {
    let results = comparePassword(req.body.password, findEmail.password);
    if (results) {
      let user = findEmail.toObject();
      delete user.password;
      user.token = token(user);
      helper(res, "login successfully ", user);
    } else {
      next(new Error("your password is something wrong , pls try again "));
    }
  } else {
    next(new Error(" Your email is wrong"));
  }
};

const getOne = async (req, res, next) => {
  const findId = await userDB.findById(req.params.id);
  helper(res, "get user", findId);
};

const editUser = async (req, res, next) => {
  const findId = await userDB.findById(req.params.id);
  if (findId) {
    await userDB.findByIdAndUpdate(findId_id, req.body);
    let results = await userDB.findById(findId._id);
    helper(res, "edit user info", results);
  } else {
    next(new Error("Your ID is wrong "));
  }
};
const deleteUser = async (req, res, next) => {
  let findId = await userDB.findById(req.params.id);
  if (findId) {
    await userDB.findByIdAndDelete(findId._id);
    helper(res, "delete user", findId);
  } else {
    next(new Error("Your ID is wrong "));
  }
};

module.exports = {
  getAll,
  registerUser,
  LoginUser,
  getOne,
  editUser,
  deleteUser,
};
