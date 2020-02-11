const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use('/', express.static(path.join(__dirname, '/dist')));

const port = process.env.PORT || 3000;

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(`${port}`, () => {
  console.log(`Listening on port ${port}`);
});
