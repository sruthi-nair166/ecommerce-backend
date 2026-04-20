const { create } = require("node:domain");

let orders = [];

const getOrders = (req, res) => {
  res.json(orders);
};

const createOrder = (req, res) => {
  const { userId, products } = req.body;

  if (!userId || !products) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newOrder = { userId, products };
  orders.push(newOrder);

  res.json({ message: "Order created", order: newOrder });
};

const updateOrder = (req, res) => {
  const id = parseInt(req.params.id);

  if (!orders[id]) {
    return res.status(404).json({ message: "Order not found" });
  }

  orders[id] = { ...orders[id], ...req.body };
  res.json(orders[id]);
};

const deleteOrder = (req, res) => {
  const id = parseInt(req.params.id);

  if (!orders[id]) {
    return res.status(404).json({ message: "Order not found" });
  }

  const deleted = orders.splice(id, 1);
  res.json(deleted);
};

module.exports = { getOrders, createOrder, updateOrder, deleteOrder };
