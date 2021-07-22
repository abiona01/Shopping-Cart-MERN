require("dotenv").config();
const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log("MongoDB connection SUCCESS".cyan.underline.bold);
	} catch (error) {
		console.log(error("MongoDb connection FAIL").red);
		process.exit(1);
	}
};

module.exports = connectDB;
