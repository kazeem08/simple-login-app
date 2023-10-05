const express = require('express');
const router = express.Router();

// Home page

router.get('/', (req, res) => {
    return res.send('Welcome to the street')
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
    return res.status(200).send('Welcome')
});

// Logout
router.get('/logout', (req, res) => {
  res.redirect('/');
});

module.exports = router;
