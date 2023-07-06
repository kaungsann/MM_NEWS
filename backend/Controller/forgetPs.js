const forgetPsDb = require("../Model/forgetPs");
const { helper, encode } = require("../Library/helper");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const userDb = require("../Model/user");
// let testAccount = nodemailer.createTestAccount();
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const userForgetPassword = async (req, res, next) => {
  const findEmail = await userDb.findOne({ email: req.body.email });

  if (findEmail) {
    const resetToken = Math.random().toString(36).substring(2, 15);
    findEmail.resetToken = resetToken;
    findEmail.resetTokenExpiration = Date.now() + 3600000; // Token expires in 1 hour
    await findEmail.save();
    helper(res, "Email sent successfully", findEmail);
    //  Send email with the reset link
    //   http://localhost:5173/
    //http://localhost:5000/user/reset-password/${resetToken}
    const mailOptions = {
      from: process.env.EMAIL,
      to: findEmail.email,
      subject: "Reset your password",
      text: `Click on the following link to reset your password:  http://localhost:5173/reset-password/${resetToken}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  } else {
    next(new Error("Your email doesn't exist in server"));
  }
};

const userResetPassword = async (req, res, next) => {
  const token = req.params.id;
  const userPw = req.body.password;

  // Find user by reset token
  const user = await userDb.findOne({
    resetToken: token,
    resetTokenExpiration: { $gt: Date.now() },
  });

  if (!user) {
    next(new Error("Invalid or expired token"));
  }

  // Update password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userPw, salt);
  user.password = hashedPassword;

  user.resetToken = undefined;
  user.resetTokenExpiration = undefined;
  await user.save();

  helper(res, "Password reset successful , Pls login again");
};

module.exports = {
  userForgetPassword,
  userResetPassword,
};
