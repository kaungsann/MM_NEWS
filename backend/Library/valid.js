const jwt = require("jsonwebtoken");
const userDb = require("../Model/user");
module.exports = {
  validBody: (schema) => {
    return (req, res, next) => {
      const results = schema.validate(req.body);
      if (results.error) {
        next(new Error(results.error.details[0].message));
      } else {
        next();
      }
    };
  },

  validParams: (schema, name) => {
    return (req, res, next) => {
      let obj = {};

      obj[`${name}`] = req.params[`${name}`];
      let results = schema.validate(obj);
      if (results.error) {
        next(new Error(results.error.details[0].message));
      } else {
        next();
      }
    };
  },

  validToken: async (req, res, next) => {
    let token = req.headers.authorization;

    if (token) {
      let tokens = token.split(" ")[1];
      let decodeUser = jwt.decode(tokens, process.env.SECRET_KEY);
      let user = await userDb.findById(decodeUser._id).select("-password");
      if (user) {
        req.body["user"] = user;
        next();
      } else {
        next(new Error("Tokenization Error"));
      }
    } else {
      next(new Error("Tokenization Error"));
    }
  },
};
