import type Receipt from './receipt.interface';

export default interface Category {
	id: number;
	name: string;
	receipts: Receipt[];
}
