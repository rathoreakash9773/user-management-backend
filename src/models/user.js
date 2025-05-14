let users = [];
let nextId = 1;

function getAllUsers() {
  return users;
}

function addUser(userData) {
  const invalidUsers = [];
  const addedUsers = [];

  userData.forEach((user) => {
    const { name, email, image } = user;

    if (!name || !email || !image) {
      invalidUsers.push(user);
      return;
    }

    const newUser = { id: nextId++, name, email, image };
    users.push(newUser);
    addedUsers.push(newUser);
  });

  return { addedUsers, invalidUsers };
}

function deleteUser(userId) {
  const index = users.findIndex((user) => user.id === userId);
  if (index === -1) {
    return null;
  }
  const deletedUser = users.splice(index, 1)[0];
  return deletedUser;
}

module.exports = { getAllUsers, addUser, deleteUser };