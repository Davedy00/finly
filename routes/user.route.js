// user.route.js
const express = require('express');
const router = express.Router();

// GET route for testing
router.get('/create', (req, res) => {
    res.send('This is the user creation page. Please use POST to create a user.');
});

// POST route for creating a new user
router.post('/create', (req, res) => {
    // Logic to create a new user goes here
    const newUser = req.body; // Assuming you send user data in the request body
    // Add your user creation logic (e.g., save to database)

    // Send a response back
    res.status(201).json({ message: 'User created successfully!', user: newUser });
});

// Export the router
module.exports = router;