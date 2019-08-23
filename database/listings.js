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

const getAll = function(callback){
  listing.find({}).exec((err, data) => {
    if(err){
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

module.exports={
  listing,
  getAll
}
