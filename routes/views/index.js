var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.query('services', keystone.list('Service').model.find());
	view.query('carousel', keystone.list('Carousel').model.find());
	view.query('staff', keystone.list('Staff').model.find());
	view.query('jobs', keystone.list('Job').model.find());
	view.query('clients', keystone.list('Client').model.find());
	view.query('partners', keystone.list('Partner').model.find());
	// Render the view
	view.render('index');
};
