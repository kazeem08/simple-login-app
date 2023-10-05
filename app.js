const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
