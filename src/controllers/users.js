const { getAllUsers: fetchUsers, addUser: processUsers, deleteUser: removeUser } = require('../models/user');

function getAllUsers(req, res) {
  const users = fetchUsers();
  res.status(200).json({ data: users, msg: 'Users retrieved successfully' });
}

function addUser(req, res) {
  const userData = Array.isArray(req.body) ? req.body : [req.body];
  const { addedUsers, invalidUsers } = processUsers(userData);

  if (invalidUsers.length > 0) {
    return res.status(400).json({
      msg: 'Some users have missing fields',
      data: { invalidUsers },
    });
  }

  res.status(201).json({
    msg: 'Users added successfully',
    data: addedUsers,
  });
}

function deleteUser(req, res) {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({ msg: 'Invalid user ID' });
  }

  const deletedUser = removeUser(userId);

  if (!deletedUser) {
    return res.status(404).json({ msg: 'User not found' });
  }

  res.status(200).json({ msg: 'User deleted successfully', data: deletedUser });
}

module.exports = {
  getAllUsers,
  addUser,
  deleteUser,
};