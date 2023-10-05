const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('login', { message: req.flash('error') });
});

// Dashboard
router.get('/dashboard', isAuthenticated, (req, res) => {
  res.render('dashboard', { user: req.user });
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

module.exports = router;
