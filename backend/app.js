const express = require('express');
const app = express();
const PORT = 5000;


app.get('/', (req, res) => {
  res.json({ message: 'Thala for a reason 7' });
});


app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
