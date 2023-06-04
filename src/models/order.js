const {Schema, model} = require("mongoose");

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
    }
});


const Order = model('Order', orderSchema);

module.exports = Order;
