var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'leadership';

	//load Services
	view.query('staff', keystone.list('Staff').model.find());

	// Render the view
	view.render('leadership');
};
