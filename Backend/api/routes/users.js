const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/signup', userController.user_sign_in);

router.post('/login', userController.user_log_in);

module.exports = router;
