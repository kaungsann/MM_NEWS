const saveFile = async (req, res, next) => {
  let file = req.files.file;
  let fileName = new Date().valueOf() + "_" + file.name;
  file.mv(`./uploads/${fileName}`);
  req.body["image"] = fileName;
  next();
};
const saveFiles = async (req, res, next) => {
  let files = req.files.files;
  let fileArray = [];
  files.forEach((file) => {
    let fileName = new Date().valueOf() + "_" + file.name;
    file.mv(`./uploads/${fileName}`);
    fileArray.push(fileName);
  });
  req.body["images"] = fileArray.join(",");
  next();
};

module.exports = {
  saveFile,
  saveFiles,
};
