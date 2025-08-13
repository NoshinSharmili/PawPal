// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getUsers, createUser, loginUser, getUser } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.get('/:id', getUser);

module.exports = router;
