const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Transfer-Encoding', 'chunked');

  let count = 1;
  const interval = setInterval(() => {
    if (count > 100) {
      clearInterval(interval);
      res.end();
      return;
    }
    res.write(`Chunck number ${count}\n`);
    count++;
  }, 1000);
});

app.listen(3000, () => console.log('http://localhost:3000'));
