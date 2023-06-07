const {Order} = require('../../models/order');
const getAllOrders = async (req, res) => {
    const {_id: owner} = req.user;
    try {
        const orders = await Order.find({owner}, "-createdAt -updatedAt");
        // const orders = await Order.find();
        res.json({orders});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};
module.exports = getAllOrders;
