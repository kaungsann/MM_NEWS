const tagDB = require("../Model/tag");
const { helper } = require("../Library/helper");

const getTagALL = async (req, res, next) => {
  let findAll = await tagDB.find();
  helper(res, "get tag all server  ", findAll);
};

const addTag = async (req, res, next) => {
  let findName = await tagDB.findOne({ name: req.body.name });
  if (findName) {
    next(new Error("Name is already in use"));
  } else {
    let results = await new tagDB(req.body).save();
    helper(res, "add tag ", results);
  }
};

const getTagSingle = async (req, res, next) => {
  let findId = await tagDB.findById(req.params.id);
  if (findId) {
    helper(res, "get single tag", findId);
  } else {
    next(new Error("no have tag with that id"));
  }
};

const editTag = async (req, res, next) => {
  let findID = await tagDB.findById(req.params.id);
  if (findID) {
    await tagDB.findByIdAndUpdate(findID._id, req.body);
    let results = await tagDB.findById(findID._id);
    helper(res, " edit tag ", results);
  } else {
    next(new Error("NO tag with that id"));
  }
};

const dropTag = async (req, res, next) => {
  let findID = await tagDB.findById(req.params.id);
  if (findID) {
    await tagDB.findByIdAndDelete(findID._id);
    helper(res, "delete that id ");
  } else {
    next(new Error("no have tag with that id "));
  }
};

module.exports = {
  getTagALL,
  editTag,
  dropTag,
  getTagSingle,
  addTag,
};
