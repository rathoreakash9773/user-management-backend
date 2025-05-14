const express = require('express');
const { getAllUsers, addUser, deleteUser } = require('../controllers/users.js'); 

const router = express.Router();

router.get('/', getAllUsers);  // get request endpoint
router.post('/', addUser);    // post request endpoint
router.delete('/:id', deleteUser); // delete request endpoint

module.exports = router;
