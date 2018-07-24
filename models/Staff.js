var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Staff Model
* =============
*/

var Staff = new keystone.List('Staff', {
  map: {name : 'name'},
  singular: "Staff",
  plural: 'Staffers',
  autokey: {path: 'slug', from: 'name', unique: true},
});

Staff.add({
  name: {type: Types.Name, required: true	},
  title: {type: String},
  titleAbbreviated: {type: String},
  image: { type: Types.CloudinaryImage },
  backgroundColor: {type: Types.Select , options: 'blue, orange, green, yellow', required:true, default: "blue"},
  contact: {
		email: { type: Types.Email, displayGravitar: false },
    linkedIn:{ type: Types.Url},
    twitter:{ type: Types.Url},
    github:{ type: Types.Url},
    medium:{ type: Types.Url},
	},
});

Staff.register();
