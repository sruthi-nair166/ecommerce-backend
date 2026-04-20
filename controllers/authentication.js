const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let users = [];

const register = async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = { email, password: hashedPassword };
  users.push(user);

  res.json({ message: "User registered" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(404).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET);

  res.json({ token });
};

module.exports = { register, login };
