const express = require('express');
const UserController = require('../controllers/userController')

const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);

//update
router.put('/updatePassword', UserController.changeUserPassword);
router.put('/updateEmail', UserController.changeEmail);


module.exports = router