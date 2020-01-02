const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
    async index(req, res) {
        const products = await Product.paginate({}, { page: 1, limit: 10 });

        return res.json({ products });
    }
};