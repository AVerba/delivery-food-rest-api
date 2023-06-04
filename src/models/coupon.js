const {Schema, model} = require("mongoose");

const couponSchema = new Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    discount_amount: {
        type: Number,
        required: true
    },
    expiration_date: {
        type: Date,
        required: true
    }
});

const Coupon = model('Coupon', couponSchema);

module.exports = Coupon;
