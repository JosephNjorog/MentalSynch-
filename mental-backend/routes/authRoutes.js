const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const rateLimiter = require('../middleware/rateLimiter');
const csrfProtection = require('../middleware/csrfProtection');
const dataSanitization = require('../middleware/dataSanitization');

// POST /api/auth/register - Register a new user
router.post('/register', rateLimiter, csrfProtection, dataSanitization, registerUser);

// POST /api/auth/login - Login an existing user
router.post('/login', rateLimiter, csrfProtection, dataSanitization, loginUser);

module.exports = router;
