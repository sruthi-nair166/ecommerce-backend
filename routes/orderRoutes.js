const express = require("express");
const router = express.Router();

const {
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/generation/orderController");

const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.put("/:id", verifyToken, updateOrder);
router.delete("/:id", verifyToken, deleteOrder);

module.exports = router;
