const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json({ products });
    }
};