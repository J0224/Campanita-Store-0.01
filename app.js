const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3100;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rutas y lógica de servidor adicionales

app.listen(3100, () => {
  console.log(`Server is running on port ${3100}`);
});