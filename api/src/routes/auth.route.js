const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const server = require('../controllers/server')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/pay',server.createProduct)
router.post('/stripe',server.stripe)
module.exports = router;