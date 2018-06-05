var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Component Model
* =============
*/

var Component = new keystone.List('Component', {
  map: {name : 'title'},
  singular: 'Component',
  plural: 'Components',
  autokey: { path: 'slug', from: 'title', unique: true},
});

Component.add({
  title: { type: String, required: true },
  image: { type: Types.CloudinaryImage },
  content: {
		short: { type: Types.Html, wysiwyg: true, height: 150 },
		long: { type: Types.Html, wysiwyg: true, height: 400 },
	},
  category: { type: Types.Relationship, ref: 'PostCategory', many: false,  filters: {group: 'ServiceType' }},
});

Component.relationship({ ref: 'Component', path: 'components', refPath: 'components' });

Component.register();
