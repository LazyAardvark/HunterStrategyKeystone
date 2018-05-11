var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'jobs';

	//load Services
	view.query('jobs', keystone.list('Job').model.find());

	// Render the view
	view.render('jobs');
};
