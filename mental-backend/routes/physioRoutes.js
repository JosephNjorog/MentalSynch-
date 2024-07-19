const express = require('express');
const router = express.Router();
const { startPhysioSession, completeExercise } = require('../controllers/physioController');
const { authMiddleware } = require('../middleware/authMiddleware');
const csrfProtection = require('../middleware/csrfProtection');
const rateLimiter = require('../middleware/rateLimiter');
const dataSanitization = require('../middleware/dataSanitization');

router.post('/start', authMiddleware, rateLimiter, csrfProtection, dataSanitization, startPhysioSession);
router.post('/complete', authMiddleware, rateLimiter, csrfProtection, dataSanitization, completeExercise);

module.exports = router;
