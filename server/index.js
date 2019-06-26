const express = require('express');
const morgan = require('morgan')
const app = express();
const Promise = require('bluebird');
const db = Promise.promisifyAll(require('./db'));

app.use(morgan('dev'));
app.use(express.json());

app.get('/api/movie', (req, res) => {
  db.queryAsync('SELECT * FROM movies')
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err))
})

app.post('/api/movie', (req, res) => {
  console.log(req.body);
  res.send();
})

const port = 3000;

app.listen(port, () => {
  console.log(`listening on ${port}`)
})