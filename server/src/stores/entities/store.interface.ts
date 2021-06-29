import type Receipt from '../../receipts/entities/receipt.interface';

export default interface Store {
	id: number;
	address: string;
	logo: string;
	receipts: Receipt[];
}
