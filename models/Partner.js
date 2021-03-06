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
  category: { type: Types.Relationship, ref: 'PostCategory', many: false, filters: {group: 'PartnerType'} },
  image: { type: Types.CloudinaryImage },
  website : {type: Types.Url},
});

Partner.register();
