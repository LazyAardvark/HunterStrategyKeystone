var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Staff Model
* =============
*/

var Staff = new keystone.List('Staff', {
  map: {name : 'title'},
  singular: "Staff",
  plural: 'Staffers',
  autokey: {path: 'slug', from: 'title', unique: true},
});

Staff.add({
  name: {
		first: { type: String, wysiwyg: true, height: 20 },
		last: { type: String, wysiwyg: true, height: 20 },
	},
  title: {type: String, required: true},
  corporate_title: {type: String},
  image: { type: Types.CloudinaryImage },
  contact: {
		phone: { type:Types.Number},
		email: { type: Types.Email, displayGravitar: false },
	},
});

Staff.register();
