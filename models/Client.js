var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Client Model
* =============
*/

var Client = new keystone.List('Client', {
  map: {name : 'title'},
  singular: 'Client',
  plural: 'Clients',
  autokey: { path: 'slug', from: 'title', unique: true},
});

Client.add({
  name: {
		organization: { type: String},
		categories: { type: Types.Relationship, ref: 'ClientCategory', many: false }
	},
  contract: {
    name: { type: String},
    awardDate: { type: Types.Date},
    partners: { type: Types.Relationship, ref: 'Partner', many: true },
  },
  title: {type: String, required: true},
  image: { type: Types.CloudinaryImage },
  contact: {
		phone: { type:Types.Number},
		email: { type: Types.Email, displayGravitar: false },
	},
});

Client.register();
