var keystone  = require('keystone');
var Types = keystone.Field.Types;

/**
* Job Model
* =============
*/

var Job = new keystone.List('Job', {
  map: {name : 'title'},
  singular: 'Job',
  plural: 'Jobs',
  autokey: { path: 'slug', from: 'position', unique: true},
});

Job.add({
  position: { type: String, required: true, initial: 'Consultant'},
  title: { type: String, required: true },
  image: { type: Types.CloudinaryImage },
  type: { type: Types.Select , options: 'Full-time, Part-time, Internship', required:true, default: "Full-time" },
  publishDate: { type: Types.Date, index: true},
  expirationDate: { type: Types.Date, index: true},
  location:{ type: Types.Location, defaults: { country: 'United States' } },
  categories: { type: Types.Relationship, ref: 'PostCategory', many: true,  filters: {group: 'Tag' }},
  content: {
		short: { type: Types.Html, wysiwyg: true, height: 150 },
		long: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Job.register();
