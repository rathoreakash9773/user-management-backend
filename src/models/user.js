const logger = require('../utils/logger');

let users = [];
let nextId = 1;

function getAllUsers() {
  logger.info('Fetching all users');
  return users;
}

function addUser(userData) {
  const invalidUsers = [];
  const addedUsers = [];

  userData.forEach((user) => {
    const { name, email, image } = user;

    if (!name || !email || !image) {
      logger.warn('Invalid user data:', user);
      invalidUsers.push(user);
      return;
    }

    const newUser = { id: nextId++, name, email, image };
    users.push(newUser);
    addedUsers.push(newUser);
    logger.info(`User added: ${JSON.stringify(newUser)}`);
  });

  if (invalidUsers.length > 0) {
    logger.warn(`Invalid users encountered: ${JSON.stringify(invalidUsers)}`);
  }

  return { addedUsers, invalidUsers };
}

function deleteUser(userId) {
  const index = users.findIndex((user) => user.id === userId);
  if (index === -1) {
    logger.warn(`User not found for ID: ${userId}`);
    return null;
  }
  const deletedUser = users.splice(index, 1)[0];
  logger.info(`User deleted: ${JSON.stringify(deletedUser)}`);
  return deletedUser;
}

module.exports = { getAllUsers, addUser, deleteUser };