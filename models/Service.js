var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Service Model
* =============
*/

var Service = new keystone.List('Service', {
  map: {name : 'title'},
  singular: 'Service',
  plural: 'Services',
  autokey: { path: 'slug', from: 'title', unique: true},
});

Service.add({
  title: { type: String, required: true },
  image: { type: Types.CloudinaryImage },
  content: {
		short: { type: Types.Html, wysiwyg: true, height: 150 },
		Long: { type: Types.Html, wysiwyg: true, height: 400 },
	},
  categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

Service.register();
