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
		products: {
			type: 'jsonb',
		},
		total: {
			type: 'numeric',
		},
		currency: {
			type: String,
		},
		paymentMethod: {
			type: String,
		},
		cardNumber: {
			type: String,
		},
		misc: {
			type: String,
			nullable: true,
		},
	},
	relations: {
		store: {
			type: 'many-to-one',
			target: 'store',
		},
		user: {
			type: 'many-to-one',
			target: 'user',
		},
		category: {
			type: 'many-to-one',
			target: 'category',
		},
	},
});
