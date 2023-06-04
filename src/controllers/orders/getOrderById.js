const Order = require('../../models/order');
const getOrderById = async (req, res) => {
    try {
        const {id} = req.params;

        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({error: 'Order not found'});
        }

        res.json({order});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = getOrderById;
