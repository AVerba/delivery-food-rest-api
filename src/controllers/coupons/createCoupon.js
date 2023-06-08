const Coupon = require('../../models/coupon');


const createCoupon = async (req, res) => {
    const {_id: owner} = req.user;

    try {
        const couponData = { ...req.body, owner };
        const order = await Coupon.create(couponData);

        res.status(201).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};
module.exports = createCoupon;
