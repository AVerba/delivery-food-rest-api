const Coupon = require("../../models/coupon");
const getAllCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.json({coupons});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};
module.exports = getAllCoupons;
