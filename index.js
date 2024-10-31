const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Bonjour de Express!' });
});

app.get('/heure', (req, res) => {
  res.json({ heure: new Date().toLocaleTimeString() });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});