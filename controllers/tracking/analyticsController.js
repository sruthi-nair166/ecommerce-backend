let products = [
  { name: "Phone", price: 1500, category: "electronics" },
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "Shoes", price: 800, category: "fashion" },
  { name: "T-Shirt", price: 500, category: "fashion" },
];

const getRecommendations = (req, res) => {
  const { category } = req.query;

  let recommendations = products;

  if (category) {
    recommendations = products.filter((p) => p.category === category);
  }

  if (!category) {
    recommendations = products.sort(() => 0.5 - Math.random());
  }

  res.json({
    message: "Recommendations generated",
    recommendations,
  });
};

module.exports = { getRecommendations };
