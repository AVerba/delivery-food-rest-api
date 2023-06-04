const Coupon = require("../../models/coupon");
const getCouponByCode = async (req, res) => {
    try {
        const {code} = req.params;

        const coupon = await Coupon.findOne({code});
        if (!coupon) {
            return res.status(404).json({error: 'Coupon not found'});
        }

        res.json({coupon});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = getCouponByCode;

