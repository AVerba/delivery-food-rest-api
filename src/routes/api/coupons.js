const express = require('express');
const {ctrlWrapper} = require(`../../helpers`);
const {auth, isValidId} = require(`../../middlewares`);


const ctrl = require(`../../controllers/coupons`);

const router = express.Router();

// Create a new coupon
router.post('/', auth, ctrlWrapper(ctrl.createCoupon));

// Get all coupons
router.get('/', auth, ctrlWrapper(ctrl.getAllCoupons));

// Get a specific coupon by code
router.get('/:code', auth, isValidId, ctrlWrapper(ctrl.getCouponByCode));

// Delete a coupon by code
router.delete('/:code', auth, isValidId, ctrlWrapper(ctrl.deleteCouponByCode));

module.exports = router;
