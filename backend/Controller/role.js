const roleDb = require("../Model/role");
const userDb = require("../Model/user");
const { helper } = require("../Library/helper");

const allRole = async (req, res, next) => {
  let results = await roleDb.find();
  helper(res, "all role", results);
};

const postRole = async (req, res, next) => {
  let findName = await roleDb.findOne({ name: req.body.name });
  if (findName) {
    next(new Error("Name is alreadhy in use"));
  } else {
    let results = await new roleDb(req.body).save();
    helper(res, "save role", results);
  }
};

const getOneRole = async (req, res, next) => {
  let findId = await roleDb.findById(req.params.id);
  if (findId) {
    helper(res, "get one role", getOneRole);
  } else {
    next(new Error("You don't have with that id"));
  }
};

const editRole = async (req, res, next) => {
  let findId = await roleDb.findById(req.params.id);
  if (findId) {
    await roleDb.findByIdAndUpdate(findId._id, req.body);
    let results = await roleDb.findById(findId._id);
    helper(res, "edit role", results);
  } else {
    next(new Error("You don't have with that id"));
  }
};
const deleteRole = async (req, res, next) => {
  let findId = await roleDb.findById(req.params.id);
  if (findId) {
    await roleDb.findByIdAndDelete(findId._id);
    let results = await roleDb.findById(findId._id);
    helper(res, "delete role");
  } else {
    next(new Error("You don't have with that id"));
  }
};
const addRole = async (req, res, next) => {
  console.log("add role is working");

  let user = await userDb.findById(req.body.userId);
  let roleId = await roleDb.findOne({ name: "OWNER" });
  if (user) {
    await userDb.findByIdAndUpdate(user._id, { $push: { role: roleId._id } });
    let userId = await userDb.findById(user._id);
    helper(res, "finished add role user", userId);
  } else {
    next(new Error("You don't have with that id"));
  }
};
const RemoveRole = async (req, res, next) => {
  console.log("remove role is working");
  let user = await userDb.findById(req.body.userId);
  let roleId = await roleDb.findById(req.body.roleId);
  if (user) {
    await userDb.findByIdAndUpdate(user._id, { $pull: { role: roleId._id } });
    let userId = await userDb.findById(user._id);
    helper(res, "add role user", userId);
  } else {
    next(new Error("You don't have with that id"));
  }
};

const clickRemoveRole = async (req, res, next) => {
  let userId = await userDb.findById(req.params.id);
  let roleId = await roleDb.findOne({ name: "OWNER" });
  if (userId) {
    await userDb.findByIdAndUpdate(userId._id, { $pull: { role: roleId._id } });
    let user = await userDb.findById(userId._id);
    helper(res, "remove role", user);
  }
};
const clickAddRole = async (req, res, next) => {
  let userId = await userDb.findById(req.params.id);
  let roleId = await roleDb.findOne({ name: "OWNER" });
  if (userId) {
    await userDb.findByIdAndUpdate(userId._id, { $push: { role: roleId._id } });
    let user = await userDb.findById(userId._id);
    helper(res, "remove role", user);
  }
};

module.exports = {
  allRole,
  postRole,
  getOneRole,
  editRole,
  deleteRole,
  addRole,
  RemoveRole,
  clickRemoveRole,
  clickAddRole,
};
