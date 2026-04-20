let products = [
  { name: "Phone", price: 1500, category: "electronics" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "Shoes", price: 800, category: "fashion" },
  { name: "T-Shirt", price: 500, category: "fashion" },
];

const getProducts = (req, res) => {
  let result = [...products];

  const { name, category, price, sort } = req.query;

  if (name) {
    result = result.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (price) {
    result = result.filter((p) => p.price <= Number(price));
  }

  if (sort === "price_asc") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "price_desc") {
    result.sort((a, b) => b.price - a.price);
  }

  res.json(result);
};

const createProduct = (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json({ message: "Product added", product: newProduct });
};

const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  if (!products[id]) {
    return res.status(404).json({ message: "Not found" });
  }

  products[id] = { ...products[id], ...req.body };
  res.json(products[id]);
};

const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  if (!products[id]) {
    return res.status(404).json({ message: "Not found" });
  }

  const deleted = products.splice(id, 1);
  res.json(deleted);
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
