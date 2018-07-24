var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	// Set locals
	locals.filters = {
		services: req.params.services,
	};
	locals.data = {
		services: [],
	};

	view.query('services', keystone.list('Service').model.find());
	view.query('carousel', keystone.list('Carousel').model.find());
	view.query('staff', keystone.list('Staff').model.find());
	view.query('jobs', keystone.list('Job').model.find());
	view.query('customers', keystone.list('Customer').model.find());
	view.query('partners', keystone.list('Partner').model.find());
	view.query('posts', keystone.list('Post').model.find().sort({'publishedDate': -1}).limit(4));

	// Load other posts
	view.on('init', function (next) {

		var q = keystone.list('Service').model.find().populate('components');

		q.exec(function (err, results) {
			locals.data.services = results;
			next(err);
		});

	});

	// Render the view
	view.render('index');
};
