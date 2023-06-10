const {Schema, model} = require("mongoose");
const Joi = require('joi');
const {emailRegexp} = require("../const/RegExp");

const orderSchema = new Schema({

    restaurant_name: {
        type: String,
        required: true
    },
    order_date: {
        type: Date,
        default: Date.now
    },
    order_details: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            minlength: 10,
            maxlength: 63,
            match: emailRegexp,
            required: [true, "Email is required"],
        },
        phone: {
            type: String,
            minlength: 5,
            maxlength: 15,
            required: [true, "phone number is required"],
        },
        address: {
            type: String,
            required: true,
            minlength: 10,
            maxlength: 30,
        },

    },
    items: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    total_price: {
        type: Number,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
}, {versionKey: false, timestamps: true});
const addOrder = Joi.object({
    restaurant_name: Joi.string().required(),
    order_date: Joi.date().default(Date.now),
    order_details: Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().pattern(emailRegexp).required(),
        phone: Joi.string().min(5).required(),
        address: Joi.string().min(30).required(),

    }),
    items: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            quantity: Joi.number().required()
        })
    ),
    total_price: Joi.number().required(),
});

const schemas = {
    order: addOrder,
};

const Order = model('Orders', orderSchema);

module.exports = {
    Order,
    schemas,
};
