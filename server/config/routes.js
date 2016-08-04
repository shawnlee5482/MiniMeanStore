  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
  	// First, at the top of your routes.js file you'll have to require the controller
    var customers = require('./../controllers/customers.js');

    // Customers
    app.get('/customers/delete/:id', function(req, res) {     
      customers.delete(req, res);
    });

    app.get('/customers', function(req, res) {
      customers.index(req, res);
    });

    app.post('/customers', function(req, res) {
      customers.create(req, res);
    });    

    var products = require('./../controllers/products.js');

    // Products
    app.get('/products/delete/:id', function(req, res) {    
      products.delete(req, res);
    });

    app.get('/products', function(req, res) {
      products.index(req, res);
    });

    app.post('/products', function(req, res) {
      products.create(req, res);
    });     

    // Orders
    var orders = require('./../controllers/orders.js');
    app.get('/orders', function(req, res) {
      orders.index(req, res);
    });

    app.post('/orders', function(req, res) {
      orders.create(req, res);
    }); 
};