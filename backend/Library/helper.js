const bcrypt = require("bcryptjs");
const token = require("jsonwebtoken");
module.exports = {
  helper: (res, message = "", results = []) => {
    res.json({
      con: true,
      message,
      results,
    });
  },
  encode: (password) => bcrypt.hashSync(password),
  comparePassword: (plain, password) => bcrypt.compareSync(plain, password),
  token: (payload) =>
    token.sign(payload, process.env.SECRET_KEY, { expiresIn: "4h" }),
};
