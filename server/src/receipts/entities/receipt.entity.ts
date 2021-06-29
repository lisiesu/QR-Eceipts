import { EntitySchema } from 'typeorm';
import Receipt from './receipt.interface';

export const ReceiptSchema = new EntitySchema<Receipt>({
	name: 'receipts',
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
});
