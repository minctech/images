const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/listings.js');
const morgan = require('morgan')
const app = express();
var router = express.Router()

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/listings/:listing', express.static(`${__dirname}/../client/dist`));
app.use(express.static(`${__dirname}/../client/dist`));


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.get('/api/listings/:listing/images', (req, res) => {
  const listingId = req.params.listing;

  db.get(listingId, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});



app.listen(3777, () => {
  console.log('listening on port 3777');
});
