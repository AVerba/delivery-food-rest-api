const express = require("express");
const {ctrlWrapper} = require(`../../helpers`);
const {auth, validation, isValidId} = require(`../../middlewares`);
const ctrl = require(`../../controllers/orders`);
const {schemas} = require("../../models/order");

const router = express.Router();
// Create a new order
router.post('/', auth, validation(schemas.order), ctrlWrapper(ctrl.createOrder));

// Get all orders
router.get('/', auth, ctrlWrapper(ctrl.getAllOrders));

// Get a specific order by ID
router.get('/:id', auth, isValidId, ctrlWrapper(ctrl.getOrderById));

// Delete an order by ID
router.delete('/:id', auth, isValidId, ctrlWrapper(ctrl.deleteOrderById));

module.exports = router;
