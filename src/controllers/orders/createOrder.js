const {Order} = require('../../models/order');

const createOrder = async (req, res) => {
    const {_id: owner} = req.user;

    try {
        const orderData = { ...req.body, owner };
        const order = await Order.create(orderData);

        res.status(201).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};
module.exports = createOrder;
