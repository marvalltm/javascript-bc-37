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

router.get('/all', getUsers);
router.post('/', addUser);
router.get('/:id', getUser);
router.put('/:id', addOrUpdateUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = {
  routes: router,
};
