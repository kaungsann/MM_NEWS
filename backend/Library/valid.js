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

  validRole: (roles) => {
    return async (req, res, next) => {
      let valid = false;
      for (let i = 0; i < roles.length; i++) {
        let hasRole = req.user.role.find((rol) => rol.name === roles[i]);
        console.log("has role is ", hasRole);
        if (hasRole) {
          valid = true;
          break;
        } else {
          next(new Error("you don't have role "));
        }
      }
      if (bol) {
        next();
      } else {
        new Error("you don't have role exist ");
      }
    };
  },
  validPermit: (permits) => {
    return async (req, res, next) => {
      let validPermit = false;
      for (let i = 0; i < permits.length; i++) {
        let hasPermit = req.user.permit.find((per) => per.name === permits[i]);
        if (hasPermit) {
          validPermit = true;
          break;
        } else {
          next(new Error("you don't have permit "));
        }
      }
      if (bol) {
        next();
      } else {
        next(new Error("you don't have vip permit exist "));
      }
    };
  },
};
