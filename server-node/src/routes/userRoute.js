const express = require('express');

const router = express.Router();
const { 
    register,
    login,
    updateProfile
} = require('../controller/userController')

router.post('/register', register);
router.post('/login', login);
router.put('/updateProfile', updateProfile);

module.exports = router