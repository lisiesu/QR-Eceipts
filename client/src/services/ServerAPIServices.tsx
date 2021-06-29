import * as BASE_URL from './Http-data';
import { Receipt } from '../interfaces/types';

const getUserReceipts = async (user: string): Promise<Receipt> => {
	const JSONreceipts = await fetch(`${BASE_URL}/receipts`);
	const receipts: Receipt = await JSONreceipts.json();
	return receipts;
};

export default { getUserReceipts };
