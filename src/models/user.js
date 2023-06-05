const {Schema, model} = require("mongoose");
const Joi = require("joi");

const emailRegexp =
    /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@([a-zA-Z0-9]+([a-zA-Z0-9.])\.)+[a-z]{2,4}$/;
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?!.*\s).*$/;

const userSchema = new Schema(
    {
        password: {
            type: String,
            minlength: 6,
        },
        email: {
            type: String,
            minlength: 10,
            maxlength: 63,
            match: emailRegexp,
            required: [true, "Email is required"],
            unique: true,
        },
        token: {
            type: String,
            default: null,
        },
    },
    {versionKey: false, timestamps: true}
);

const registerSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().pattern(passwordRegexp).min(6).required(),
});
const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().pattern(passwordRegexp).min(6).required(),
});


const schemas = {
    register: registerSchema,
    login: loginSchema,
};

const User = model("user", userSchema);

module.exports = {
    User,
    schemas,
};
