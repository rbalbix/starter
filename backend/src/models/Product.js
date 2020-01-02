const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    url: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

mongoose.model("Product", ProductSchema);