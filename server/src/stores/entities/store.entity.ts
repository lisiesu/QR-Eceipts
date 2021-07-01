import { EntitySchema } from 'typeorm';
import Store from './store.interface';

export const StoreSchema = new EntitySchema<Store>({
	name: 'store',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: 'increment',
		},
		address: {
			type: String,
		},
		logo: {
			type: String,
		},
		storeNumber: {
			type: String,
			unique: true,
		},
		telephoneNumber: {
			type: String,
		},
		website: {
			type: String,
		},
	},
	relations: {
		receipts: {
			type: 'one-to-many',
			target: 'receipt',
		},
		users: {
			type: 'many-to-many',
			target: 'user',
		},
	},
});
