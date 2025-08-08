const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample GET endpoint
app.get('/', (req, res) => {
  res.send('Hello from GitHub Test Project!');
});

// Sample POST endpoint
app.post('/data', (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
