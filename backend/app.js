const express = require('express');
const app = express();
const PORT = 5000;

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js running in Kubernetes!' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
