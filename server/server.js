const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/listings.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/../client/dist`));

<<<<<<< HEAD
app.get('/api/listings/1', (req, res) => {
  db.get((err, data) => {
    if (err) {
=======
app.get('/api/listings', (req, res) => {
  db.getAll((err, data) => {
    if (err){
>>>>>>> parent of 8b4a110... wrote componentDidMount, getListing, onToggle functions in App component. Loaded five images on HeroImages component. Created who images button on App Component.
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
