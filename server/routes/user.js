const express = require('express');
const {
  getUsers,
  getUser,
  addUser,
  addOrUpdateUser,
  updateUser,
  deleteUser,
} = require('../controllers/user');

const router = express.Router();

router.get('/users', getUsers);
router.post('/user', addUser);
router.get('/user/:id', getUser);
router.put('/user/:id', addOrUpdateUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = {
  routes: router,
};
