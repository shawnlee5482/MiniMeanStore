
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

// Edit the show method as follows
module.exports = (function() {
	return {
		index: function(req, res) {
			Customer.find({}, function(err, results) {   // find all documents
				if(err) {
				 console.log(err);
				} else {
					res.json(results);   // return it as json format
				}
			})
		},
		create: function(req, res) {
			console.log('create contoller:', req.body.name);
			console.log('create controller:', req.body.date);
			var f = new Customer({name: req.body.name, date: req.body.date});
			f.save(function(err) {
				if(err) {
					console.log('there is an error while saving');
				} else {
					console.log('successfully saved', f); 		
				}
			});
			res.json(f);	
		},

		delete: function(req, res) {
			Customer.find({}, function(err, results) {   // find all documents
		   		if(err) {
		     		console.log(err);
		   		} else {
		   	 		console.log(req.params.id);
		     		var id = results[req.params.id]._id;
		     		console.log('found id:' + id);
		     		Customer.remove({_id: id}, function(err) {
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