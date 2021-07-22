const Product = require("../models/Product");

const getAllProducts = async () => {
	try {
		const products = await Product.find({});
		res.status(200).json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
};

const getProductById = async () => {
	try {
		const products = await Product.find(req.params.id);
		res.status(200).json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server Error" });
	}
};

module.exports = {
	getAllProducts,
	getProductById,
};
