const Coupon = require("../../models/coupon");
const deleteCouponByCode = async (req, res) => {
    try {
        const { code } = req.params;

        const coupon = await Coupon.findOneAndDelete({ code });
        if (!coupon) {
            return res.status(404).json({ error: 'Coupon not found' });
        }

        res.json({ message: 'Coupon deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = deleteCouponByCode;

