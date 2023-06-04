const Coupon = require('../../models/coupon');

const createCoupon = async (req, res) => {
    try {
        // eslint-disable-next-line camelcase
        const {code, discount_amount, expiration_date} = req.body;

        // Check if the coupon code already exists
        const existingCoupon = await Coupon.findOne({code});
        if (existingCoupon) {
            return res.status(400).json({error: 'Coupon code already exists'});
        }

        const coupon = new Coupon({code, discount_amount, expiration_date});
        await coupon.save();

        res.status(201).json({coupon});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = createCoupon;
