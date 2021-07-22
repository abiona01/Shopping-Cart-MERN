const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	countInStock: {
		type: Number,
		required: true,
	},
	imageUrl: {
		type: String,
		requried: true,
	},
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
