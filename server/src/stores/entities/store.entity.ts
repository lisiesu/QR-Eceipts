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
	},
});
