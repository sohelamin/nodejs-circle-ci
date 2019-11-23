const express = require('express');

const PORT = 9001;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world from Circle CI\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
