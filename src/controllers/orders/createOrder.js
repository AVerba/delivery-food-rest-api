const Order = require('../../models/order');

const createOrder = async (req, res) => {
    try {

        // eslint-disable-next-line camelcase
        const {restaurant_name, items, total_price} = req.body;


        const order = new Order({
            restaurant_name,
            items,
            total_price
        });

        await order.save();

        res.status(201).json({order});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};
module.exports = createOrder;
