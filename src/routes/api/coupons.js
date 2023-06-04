const express = require('express');
const {ctrlWrapper} = require(`../../helpers`);

const ctrl = require(`../../controllers/coupons`);

const router = express.Router();

// Create a new coupon
router.post('/', ctrlWrapper(ctrl.createCoupon));

// Get all coupons
router.get('/', ctrlWrapper(ctrl.getAllCoupons));

// Get a specific coupon by code
router.get('/:code', ctrlWrapper(ctrl.getCouponByCode));

// Delete a coupon by code
router.delete('/:code', ctrlWrapper(ctrl.deleteCouponByCode));

module.exports = router;
