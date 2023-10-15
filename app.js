const express = require('express');
const app = express();
const cors = require('cors')
// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Home page
app.get('/', (req, res) => {
    return res.send('Welcome to the street')
});

app.post('/login', (req, res) => {
  console.log(req.body)
  return res.status(200).json({
    message: 'User successfully logged in',
    data: {},
    error: false
  })
});

// Server setup
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
