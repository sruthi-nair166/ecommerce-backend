let users = [];

const getUsers = (req, res) => {
  res.json(users);
};

const createUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);

  if (!users[id]) {
    return res.status(404).json({ message: "User not found" });
  }

  users[id] = { ...users[id], ...req.body };
  res.json(users[id]);
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  if (!users[id]) {
    return res.status(404).json({ message: "User not found" });
  }

  const deleted = users.splice(id, 1);
  res.json(deleted);
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
