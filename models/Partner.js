var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Partner Model
* =============
*/

var Partner = new keystone.List('Partner', {
  map: {name : 'title'},
  singular: 'Partner',
  plural: 'Partners',
  autokey: { path: 'slug', from: 'title', unique: true},
});

Partner.add({
  title: { type: String, required: true },
  image: { type: Types.CloudinaryImage },
  content: {
		short: { type: Types.Html, wysiwyg: true, height: 150 },
		long: { type: Types.Html, wysiwyg: true, height: 400 },
    website : {type: Types.Url},
	},
});

Partner.register();
