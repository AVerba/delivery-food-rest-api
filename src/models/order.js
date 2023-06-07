const {Schema, model} = require("mongoose");
const Joi = require('joi');

const orderSchema = new Schema({

    restaurant_name: {
        type: String,
        required: true
    },
    order_date: {
        type: Date,
        default: Date.now
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
