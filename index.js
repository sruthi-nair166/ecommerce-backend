const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userProfileRoutes");
const authRoutes = require("./routes/authenticationRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
