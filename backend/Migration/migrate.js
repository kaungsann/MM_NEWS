const helper = require("../Library/helper");
const fs = require("fs");
const roleDb = require("../Model/role");
const permitDb = require("../Model/permit");
const userDb = require("../Model/user");
const roleAndPermitMigrate = () => {
  let migrateData = fs.readFileSync("./Migration/roleAndPermit.json");
  let data = JSON.parse(migrateData);
  data.roles.forEach(async (role) => {
    let saveRoles = await roleDb(role).save();
    console.log("save roles", saveRoles);
  });
  data.permits.forEach(async (permit) => {
    let savePermits = await permitDb(permit).save();
    console.log(savePermits);
  });
};

const addOwerRole = async () => {
  let owerEmail = await userDb.findOne({ email: "kaungsanh53@gmail.com" });
  let owerRole = await roleDb.findOne({ name: "OWNER" });

  await userDb.findByIdAndUpdate(owerEmail._id, {
    $push: { role: owerRole._id },
  });
  await userDb.findById(owerEmail._id);
};

const addPermitRole = async (req, res, next) => {
  let user = await userDb.findOne({ email: "kaungsanh53@gmail.com" });
  let permit = await permitDb.find();
  permit.map(async (per) => {
    return await userDb.findByIdAndUpdate(user._id, {
      $push: { permit: per },
    });
  });
  await userDb.findById(user._id);
};
const removePermit = async (req, res, next) => {
  let user = await userDb.findOne({ id: req.body.userId });
  let permit = await permitDb.find();
  permit.map(async (per) => {
    return await userDb.findByIdAndUpdate(user._id, {
      $pull: { role: per },
    });
  });
  await userDb.findById(user._id);
};

module.exports = {
  roleAndPermitMigrate,
  addOwerRole,

  addPermitRole,
  removePermit,
};
