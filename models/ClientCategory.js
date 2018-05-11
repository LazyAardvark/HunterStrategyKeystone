var keystone = require('keystone');

/**
 * ClientCategory Model
 * ==================
 */

var ClientCategory = new keystone.List('ClientCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

ClientCategory.add({
	name: { type: String, required: true },
});

ClientCategory.relationship({ ref: 'Staff', path: 'staffs', refPath: 'categories' });

ClientCategory.register();
