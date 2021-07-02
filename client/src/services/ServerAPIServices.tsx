import * as DATA from './Http-data';
import { Receipt } from '../interfaces/types';

// const baseUrl = 'http://localhost:3000';

export const getUserReceipts = async (userId: string): Promise<Receipt[]> =>
	DATA;

export const getReceiptByid = async (id: string): Promise<Receipt> => {
	const index = +id;
	const result = DATA[index];
	return result;
};

// export const getUserReceipt = async (receiptId: string): Promise<Receipt> => {
// 	const response = await fetch(`${baseUrl}:${receiptId}`);
// 	return await response.json();
// };

// get(baseUrl + ‘/receipts’)
// If the user is authorised with a cookie in the header, then a list of their receipts will be sent in the response.
// get(baseUrl + ‘/receipts:receiptId’)
// The server will respond with receipt information that can be displayed using html.
// If the user is authorised with a cookie, then it also gets added to their db.
// Should display the message added to DB if they are authorised and adding to db was successful.
