const express = require('express');
const router = express.Router();
const {
    getUser,
    createUser,
    deleteUser,
} = require('../controllers/user.controller');

router.get('/', getUser);          // This route handles GET requests to /users
router.get('/create', createUser); // This route handles GET requests to /users/create
router.get('/delete', deleteUser); // This route handles GET requests to /users/delete

module.exports = router;