// routes/routes.js
const express = require('express');
const router = express.Router();

// Import controllers
const authenticationController = require('../controllers/authenticationController');

// Define routes for the controllers
router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);
router.post('/logout', authenticationController.logout);
router.get('/dashboard', authenticationController.dashboard);

module.exports = router;

// Compare this snippet from app.js:
