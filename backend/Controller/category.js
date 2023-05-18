const { helper } = require("../Library/helper");

const categoryDB = require("../Model/category");

const allCategory = async (req, res, next) => {
  const results = await categoryDB.find();
  helper(res, "all category ", results);
};
const categoryOne = async (req, res, next) => {
  let findId = await categoryDB.findById(req.params.id);
  if (findId) {
    helper(res, "category one", findId);
  } else next(new Error("your category id is wrong "));
};
const addCategory = async (req, res, next) => {
  const catName = await categoryDB.findOne({ name: req.body.name });
  if (catName) {
    next(new Error("Name is alreaduy in use"));
  } else {
    const results = await new categoryDB(req.body).save();
    helper(res, "category saved ", results);
  }
};
const pathCategory = async (req, res, next) => {
  let categoryId = await categoryDB.findById(req.params.id);
  if (categoryId) {
    await categoryDB.findByIdAndUpdate(categoryId._id, req.body);
    let results = await categoryDB.findById(categoryId._id);
    helper(res, "edit category ", results);
  } else {
    next(new Error("category id  is wrong"));
  }
};
const deleteCategory = async (req, res, next) => {
  let categoryId = await categoryDB.findById(req.params.id);
  if (categoryId) {
    await categoryDB.findByIdAndDelete(categoryId._id);
    helper(res, "delete category");
  } else {
    next(new Error("your category id is wrong"));
  }
};

module.exports = {
  allCategory,
  addCategory,
  categoryOne,
  pathCategory,
  deleteCategory,
};
