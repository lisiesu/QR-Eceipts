import { EntitySchema } from 'typeorm';
import type Category from './category.interface';

export const CategorySchema = new EntitySchema<Category>({
	name: 'category',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: 'increment',
		},
		name: {
			type: String,
		},
	},
	relations: {
		receipts: {
			type: 'one-to-many',
			target: 'receipt',
			inverseSide: 'category',
		},
	},
});
