import { EntitySchema } from 'typeorm';
import Receipt from './receipt.interface';

export const ReceiptSchema = new EntitySchema<Receipt>({
	name: 'receipt',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: 'increment',
		},
		timeOfPurchase: {
			type: 'timestamp',
		},
		content: {
			type: 'jsonb',
		},
	},
	relations: {
		store: {
			type: 'many-to-one',
			target: 'store',
		},
	},
});
