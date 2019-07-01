// ===============================================================================
// LOAD DATA LOOK at Travis examples
// Import the list of friend entries
const friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {

	// Total list of friend
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend
	app.post('/api/friends', function(req, res) {
		// take user input
		var userInput = req.body;
		

		var userResponses = userInput.scores;
	

		//best friend match
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; // for big values

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {

			// check differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
			
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};