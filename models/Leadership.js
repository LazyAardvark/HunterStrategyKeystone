var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Leadership Model
* =============
*/

var Leadership = new keystone.List('Leadership', {
  map: {name : 'title'},
  autokey: {path: 'slug', from: 'title', unique: true},
});

Leadership.add({
  name: {
		first: { type: String, wysiwyg: true, height: 20 },
		last: { type: String, wysiwyg: true, height: 20 },
	},
  title: {type: String, required: true},
  corporate_title: {type: String, required: true},
  image: { type: Types.CloudinaryImage },
  contact: {
		phone: { type:Types.Number},
		email: { type: Types.Email, displayGravitar: false },
	},
});

Leadership.register();
