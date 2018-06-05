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
		long: { type: Types.Html, wysiwyg: true, height: 400 },
	},
  categories: { type: Types.Relationship, ref: 'PostCategory', many: false,  filters: {group: 'ServiceType' }},
  components: {type: Types.Relationship, ref: 'Component', many: true, filters: {category: ':categories'}},
});

Service.register();
