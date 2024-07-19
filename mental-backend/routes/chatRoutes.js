const express = require('express');
const router = express.Router();
const { startChatSession, sendMessage } = require('../controllers/chatController');
const { authMiddleware } = require('../middleware/authMiddleware');
const csrfProtection = require('../middleware/csrfProtection');
const rateLimiter = require('../middleware/rateLimiter');
const dataSanitization = require('../middleware/dataSanitization');

router.post('/start', authMiddleware, rateLimiter, csrfProtection, dataSanitization, startChatSession);
router.post('/send', authMiddleware, rateLimiter, csrfProtection, dataSanitization, sendMessage);

module.exports = router;
