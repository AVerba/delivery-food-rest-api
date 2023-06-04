const Order = require('../../models/order');
const deleteOrderById = async (req, res) => {
    try {
        const {id} = req.params;

        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({error: 'Order not found'});
        }

        res.json({message: 'Order deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};
module.exports = deleteOrderById;
