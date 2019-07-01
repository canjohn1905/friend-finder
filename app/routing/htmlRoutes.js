// dependencies
var path = require('path');

// Export HTML routes
module.exports = function(app) {
	

	// which displays the home page. 
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// display the survey page.
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    
};