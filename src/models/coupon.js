const {Schema, model} = require("mongoose");
const Joi = require("joi");

const couponSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    coupon_date: {
        type: Date,
        default: Date.now
    },
    discount_amount: {
        type: Number,
        required: true
    },
    expiration_date: {
        type: Date,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
});

const addCoupon = Joi.object({
    code: Joi.string().required(),
    coupon_date: Joi.date().default(Date.now),
    discount_amount: Joi.number().required(),
    expiration_date: Joi.date().required(),
});


const schemas = {
    coupon: addCoupon,
};
const Coupon = model('Coupon', couponSchema);

module.exports = {
    Coupon,
    schemas,
};
