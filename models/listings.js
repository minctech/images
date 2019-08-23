const mongoose = require('mongoose');

const { Schema } = mongoose;

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

module.exports = listing;
