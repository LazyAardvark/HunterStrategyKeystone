var keystone = require('keystone');
var Types = keystone.Field.Types;
/**
 * PostCategory Model
 * ==================
 */

var PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
});

PostCategory.add({
	name: { type: String, required: true },
	group: { type: Types.Select , options: 'Tag, Partner, PartnerType, Customer, ServiceType, ServiceComponent', required:true,  initial: true , default: "Tag" },
});

PostCategory.relationship({ ref: 'Post', path: 'posts', refPath: 'categories' });
PostCategory.relationship({ ref: 'Service', path: 'services', refPath: 'categories' });
PostCategory.relationship({ ref: 'Customer', path: 'customers', refPath: 'categories' });
PostCategory.relationship({ ref: 'Partner', path: 'partners', refPath: 'category' });
PostCategory.relationship({ ref: 'Component', path: 'partners', refPath: 'category' });


PostCategory.register();
