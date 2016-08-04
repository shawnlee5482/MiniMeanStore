
var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function() {
	return {
		index: function(req, res) {
			Product.find({}, function(err, results) {   // find all documents
				if(err) {
					console.log(err);
				} else {
					res.json(results);   // return it as json format
				}
			})
		},
		create: function(req, res) {
			console.log('controller create imgUrl=', req.body.imgUrl);
			var f = new Product({name: req.body.name, imgUrl: req.body.imgUrl, 
				description: req.body.description, quantity: req.body.quantity});
			console.log('f=', f);
			f.save(function(err) {
				if(err) {
					console.log('Error in saving');
				} else {
					console.log('Successfully saved', f); 		
				}
			});
			res.json(f);	
		},

		delete: function(req, res) {
			Product.find({}, function(err, results) {   // find all documents
		   		if(err) {
		     		console.log(err);
		   		} else {
		   	 		console.log(req.params.id);
		     		var id = results[req.params.id]._id;
		     		console.log('found id:' + id);
		     		Product.remove({_id: id}, function(err) {
		     			if(err) {
		     				console.log('error in removal');
		     			} else {
		     				console.log('successfully removed');
		     				res.json({status: 'ok'});  // dummy response
		     			}
		     		});
		   		}
			})	  
		}
	}
})();