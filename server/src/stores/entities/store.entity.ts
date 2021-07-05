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
			nullable: true,
		},
		name: {
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
			nullable: true,
		},
	},
	relations: {
		receipts: {
			type: 'one-to-many',
			target: 'receipt',
			inverseSide: 'store',
		},
		users: {
			type: 'many-to-many',
			target: 'user',
		},
	},
});
