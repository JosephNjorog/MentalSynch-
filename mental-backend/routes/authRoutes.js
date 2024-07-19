const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const { authMiddleware } = require('../middleware/authMiddleware');
const csrfProtection = require('../middleware/csrfProtection');
const rateLimiter = require('../middleware/rateLimiter');
const dataSanitization = require('../middleware/dataSanitization');

router.post('/register', rateLimiter, csrfProtection, dataSanitization, registerUser);
router.post('/login', rateLimiter, csrfProtection, dataSanitization, loginUser);

module.exports = router;
