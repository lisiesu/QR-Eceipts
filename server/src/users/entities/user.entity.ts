import { EntitySchema } from 'typeorm';
import User from './user.interface';

export const UserSchema = new EntitySchema<User>({
	name: 'user',
	columns: {
		id: {
			primary: true,
			type: 'int',
			generated: 'increment',
		},
		name: {
			type: String,
		},
		password: {
			type: String,
		},
		email: {
			type: String,
			unique: true,
		},
		dateOfBirth: {
			type: 'date',
		},
		address: {
			type: String,
		},
	},
	relations: {
		receipts: {
			type: 'one-to-many',
			target: 'receipt',
			inverseSide: 'user',
		},
		stores: {
			type: 'many-to-many',
			target: 'store',
			joinTable: true,
		},
	},
});
