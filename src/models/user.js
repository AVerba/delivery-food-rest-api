const {Schema, model} = require("mongoose");
const{emailRegexp,passwordRegexp} =require("../const/RegExp")
const Joi = require("joi");


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
