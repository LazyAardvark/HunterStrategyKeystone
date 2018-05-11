var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Service Model
* =============
*/

var Carousel = new keystone.List('Carousel', {
  map: {name : 'title'},
  autokey: { path: 'slug', from: 'title', unique: true},
});

Carousel.add({
  title: { type: String, required: true },
  image: { type: Types.CloudinaryImage },
});

Carousel.register();
