const joi = require("joi");

module.exports = {
  registerSchema: joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().min(8).max(12).required(),
    password: joi.string().min(8).max(24).required(),
  }),
  loginSchema: joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(24).required(),
  }),
  idSchema: joi.object({
    id: joi
      .string()
      .regex(/^[a-fA-F0-9]{24}$/)
      .required(),
  }),
  permitSchema: joi.object({
    name: joi.string().required(),
  }),
  categorySchema: joi.object({
    name: joi.string(),
    image: joi.string().required(),
    text: joi.string(),
  }),
  AddRoleSchema: joi.object({
    userId: joi
      .string()
      .regex(/^{a-fA-F0-9}[24]$/)
      .required(),
    roleId: joi
      .string()
      .regex(/^[a-fA-F0-9]{24}$/)
      .required(),
  }),
  PasswordSchema: joi.object({
    password: joi.string().min(8).max(24).required(),
  }),

  PostSchema: joi.object({
    image: joi.string().required(),
    category: joi
      .string()
      .regex(/^[a-fA-F0-9]{24}$/)
      .required(),
    tag: joi
      .string()
      .regex(/^[a-fA-F0-9]{24}$/)
      .required(),
    title: joi.string().required(),
    text: joi.string().required(),
    user: joi.optional(),
  }),
};
