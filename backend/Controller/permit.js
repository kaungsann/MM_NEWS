const permitDb = require("../Model/permit");
const { helper } = require("../Library/helper");

const allPermit = async (req, res, next) => {
  let results = await permitDb.find();
  helper(res, "all permit", results);
};
const postPermit = async (req, res, next) => {
  let findName = await permitDb.findOne({ name: req.body.name });
  if (findName) {
    next(new Error("Permit Name is already in use"));
  } else {
    let results = await new permitDb(req.body).save();
    helper(res, "save permit", results);
  }
};

const getOnePermit = async (req, res, next) => {
  let findId = await permitDb.findById(req.params.id);
  if (findId) {
    helper(res, "get one permit", findId);
  } else {
    next(new Error("you don't have with that id "));
  }
};
const editPermit = async (req, res, next) => {
  let findId = await permitDb.findById(req.params.id);
  if (findId) {
    await permitDb.findByIdAndUpdate(findId._id, req.body);
    let results = await permitDb.findById(findId._id);
    helper(res, "edit permit", results);
  } else {
    next(new Error("you don't have with that id "));
  }
};
const deletePermit = async (req, res, next) => {
  console.log("hello guys");
  let findId = await permitDb.findById(req.params.id);
  if (findId) {
    await permitDb.findByIdAndDelete(findId._id);
    helper(res, "deleted permit");
  } else {
    next(new Error("you don't have with that id "));
  }
};

module.exports = {
  allPermit,
  postPermit,
  editPermit,
  deletePermit,
  getOnePermit,
};
