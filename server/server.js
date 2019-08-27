const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/listings.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/listings/1', (req, res) => {
  db.get((err, data) => {
    if (err){
      console.log(err);
      return;
    } else {
      res.send(data)
    }
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000');
});
