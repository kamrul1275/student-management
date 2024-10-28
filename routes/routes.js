// routes/routes.js
const express = require('express');
const router = express.Router();

// Import controllers
const authenticationController = require('../controllers/authenticationController');

// Define routes for the controllers
router.post('/user/register', authenticationController.register);
router.post('/user/login', authenticationController.login);
router.post('/user/logout', authenticationController.logout);
router.get('/user/dashboard', authenticationController.dashboard);

module.exports = router;

// Compare this snippet from app.js:
