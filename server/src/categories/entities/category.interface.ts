import type Receipt from '../../receipts/entities/receipt.interface';

export default interface Category {
	id: number;
	name: string;
	receipts: Receipt[];
}
