import type Receipt from '../../receipts/entities/receipt.interface';
import type User from '../../users/entities/user.interface';

export default interface Store {
	id: number;
	address: string;
	logo: string;
	receipts: Receipt[];
	users: User[];
}
