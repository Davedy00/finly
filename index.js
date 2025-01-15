// index.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route'); // Adjust the path if necessary

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json()); // For parsing application/json
app.use('/users', userRoutes); // Use user routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});