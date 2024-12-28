const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
// const userRouter = require('./routes/user.route');
const userRouter = require('./routes/user.route');
const app = express();

require('dotenv').config();
require('./libs/dbConnect');

// const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});
// app.get('/contact', (req, res) => {
//     res.render('index', { message: 'The Contact Page' });
// });
// app.get('/about', (req, res) => {
//     res.render('index', { message: 'The About Page' });
// });
// app.get('*', (req, res) => {
//     res.status(404).render('index', { message: 'Not Found' });
// });
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
app.use('/users', userRouter);

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(
    session({
    secret: process.env.AUTH_SECRET,
    saveUninitialized: true,
    resave: false,
    })
    );

    const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const userRouter = require('./routes/user.route');
require('dotenv').config(); // Ensure this is at the top
require('./libs/dbConnect');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('./public'));

app.use(
    session({
        secret: process.env.AUTH_SECRET, // Use the secret from the .env file
        saveUninitialized: true,
        resave: false,
    })
);

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});

app.use('/users', userRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});