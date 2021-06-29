import type Receipt from '../../receipts/entities/receipt.interface';

export default interface User {
	id: number;
	name: string;
	password: string;
	email: string;
	dateOfBirth: string;
	address: string;
	receipts: Receipt[];
}
