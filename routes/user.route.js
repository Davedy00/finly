// user.route.js
const express = require('express');
const router = express.Router();

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