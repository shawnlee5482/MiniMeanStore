// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// create our friendSchema
var CustomersSchema = new mongoose.Schema({
  name: String,
  date: { type: Date, default: Date.now }
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Customer', CustomersSchema);
// notice that we aren't exporting anything -- this is because this file will be run when we re