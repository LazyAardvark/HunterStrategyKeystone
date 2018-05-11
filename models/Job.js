var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Job Model
* =============
*/

var Job = new keystone.List('Job', {
  map: {name : 'title'},
  singular: 'Job',
  plural: 'Jobs',
  autokey: { path: 'slug', from: 'title', unique: true},
});

Job.add({
  title: { type: String, required: true },
  image: { type: Types.CloudinaryImage },
  content: {
		short: { type: Types.Html, wysiwyg: true, height: 150 },
		long: { type: Types.Html, wysiwyg: true, height: 400 },
	},
  categories: { type: Types.Relationship, ref: 'JobCategory', many: true },
});

Job.register();
