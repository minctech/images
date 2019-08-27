const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/appData');
// A schema for each image that is going to be stored in the images property of a listing.
const imageSchema = new Schema({
  imageId: Number,
  imagePlaceNumber: Number,
  imageSource: String,
  imageDescription: String,
});

// a schema for a listing that has an id and a list of images for that listing.
const listingSchema = new Schema({
  listingId: Number,
  images: [imageSchema],

});

const listing = mongoose.model('listing', listingSchema);

<<<<<<< HEAD
const get = function (callback) {
  listing.find({ listingId: 1 }).exec((err, data) => {
    if (err) {
      callback(err);
=======
const getAll = function(callback){
  listing.find({}).exec((err, data) => {
    if(err){
      callback(err)
>>>>>>> parent of 8b4a110... wrote componentDidMount, getListing, onToggle functions in App component. Loaded five images on HeroImages component. Created who images button on App Component.
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  listing,
<<<<<<< HEAD
  get,
};
=======
  getAll
}
>>>>>>> parent of 8b4a110... wrote componentDidMount, getListing, onToggle functions in App component. Loaded five images on HeroImages component. Created who images button on App Component.
