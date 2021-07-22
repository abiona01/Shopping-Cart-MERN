require("dotenv").config();
const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const productRoutes = require("./route/productRoutes");

connectDB();
const app = express();

app.get("/", (req, res) => res.send("Bravo my life!"));

app.use(express.json());
app.use("/api/products", productRoutes);

//Morgan
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`.yellow.bold)
);
