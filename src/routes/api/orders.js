const express = require("express");
const {ctrlWrapper} = require(`../../helpers`);

const ctrl = require(`../../controllers/orders`);

const router = express.Router();
// Create a new order
router.post('/', ctrlWrapper(ctrl.createOrder));

// Get all orders
router.get('/', ctrlWrapper(ctrl.getAllOrders));

// Get a specific order by ID
router.get('/:id', ctrlWrapper(ctrl.getOrderById));

// Delete an order by ID
router.delete('/:id', ctrlWrapper(ctrl.deleteOrderById));

module.exports = router;
