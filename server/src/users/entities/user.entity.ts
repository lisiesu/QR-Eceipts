import { EntitySchema } from 'typeorm';
import User from './user.interface';

export const UserSchema = new EntitySchema<User>({
	name: 'users',
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
		},
		dateOfBirth: {
			type: 'date',
		},
		address: {
			type: String,
		},
	},
});
