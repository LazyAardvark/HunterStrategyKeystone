var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Customer Model
* =============
*/

var Customer = new keystone.List('Customer', {
  map: {name : 'title'},
  singular: 'Customer',
  plural: 'Customers',
  autokey: { path: 'slug', from: 'title', unique: true},
});

Customer.add({
  title: { type: String, required: true },
  category: { type: Types.Relationship, ref: 'PostCategory', many: false, filters:{ group: 'Customer' } },
  image: { type: Types.CloudinaryImage },
  website : {type: Types.Url},
});

Customer.register();
