
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

// Edit the show method as follows
module.exports = (function() {
	return {
		index: function(req, res) {
			Order.find({}, function(err, results) {   // find all documents
				if(err) {
				 console.log(err);
				} else {
					res.json(results);   // return it as json format
				}
			})
		},
		create: function(req, res) {
			var f = new Order({name: req.body.name, product: req.body.product, quantity: req.body.quantity, date: req.body.date});
			f.save(function(err) {
				if(err) {
					console.log('there is an error while saving');
				} else {
					console.log('successfully saved', f);
					Product.find({name: req.body.product}, function(err, results) {
						for(var i = 0; i < results.length; i++) {
							console.log('original quantity = ', results[i].quantity);
							results[i].quantity -= req.body.quantity;
							results[i].save(function() {
							});
						}
					});	
				}
			});
			res.json(f);	
		}
	}
})();