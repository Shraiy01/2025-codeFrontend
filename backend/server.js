const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Example route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Authentication example
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@example.com' && password === 'password123') {
    return res.status(200).json({ token: 'fake-jwt-token' });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
