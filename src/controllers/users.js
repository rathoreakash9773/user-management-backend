import { getAllUsers as fetchUsers, addUser as processUsers, deleteUser as removeUser } from '../models/user.js';
import logger from '../utils/logger.js';
import responsehandler from '../middleware/responseHandler.js';


function getAllUsers(req, res) {
  try {
    const users = fetchUsers();
    res.success({ data: users});
    logger.info('Fetched all users successfully');
  } catch (error) {
    logger.error('Error fetching users:', error);
    res.serverError({ msg: 'Error fetching users' });
  }
} 

function addUser(req, res) {
  try {
    const userData = Array.isArray(req.body) ? req.body : [req.body];
    const { addedUsers, invalidUsers } = processUsers(userData);
    if (invalidUsers.length > 0) {
      logger.warn('Some users have missing fields:', invalidUsers);
      return res.invalid({
        msg: 'Some users have missing fields',
        data: { invalidUsers },
      });
    }

    logger.info(`Added users successfully: ${JSON.stringify(addedUsers)}`);
    res.created({ data: addedUsers });
  } catch (error) {
    logger.error('Error adding users:', error);
    res.serverError({ msg: 'Error adding users' });
  }
}

function deleteUser(req, res) {
  try {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
      logger.warn('Invalid user ID provided:', req.params.id);
      return res.invalid({ msg: 'Invalid user ID' });
    }

    const deletedUser = removeUser(userId);

    if (!deletedUser) {
      logger.warn(`User not found for ID: ${userId}`);
      return res.unauthorized({ msg: 'User not found' });
    }

    logger.info(`Deleted user successfully: ${JSON.stringify(deletedUser)}`);
    res.success({ msg: 'User deleted successfully', data: deletedUser });
  } catch (error) {
    logger.error('Error deleting user:', error);
    res.serverError({ msg: 'Error deleting user' });
  }
}

export {
  getAllUsers,
  addUser,
  deleteUser,
};