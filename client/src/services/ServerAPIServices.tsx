import * as DATA from './Http-data';
import { Receipt, User } from '../interfaces/types';

const baseUrl = 'https://66d6f4ba-d92e-490a-b764-04768e8484be.mock.pstmn.io';
const cookie =
	'MySuperCookie=IhateAPIS; Path=/; Expires=Fri, 01 Jul 2022 20:54:57 GMT;';
const userId = 'nel5a';

export const getUserReceipts = async (user_Id: string): Promise<Receipt[]> => {
	let response: Receipt[];
	try {
		await fetch(`${baseUrl}/users/${userId}/receipts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return response;
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const createUser = async (user: User): Promise<User> => {
	try {
		const response = await fetch(`${baseUrl}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		return await response.json();
	} catch (err) {
		console.log(err);
		return err;
	}
};

// export const getReceiptByid = async (id: string): Promise<Receipt> => {
// 	const response = await fetch(`${baseUrl}/id`);
// 	return response.json();
// };

export const getReceiptByid = async (id: string): Promise<Receipt> => {
	const index = +id;
	const result = DATA[index];
	return result;
};

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Cookie', '{{MySuperCookie}}');

const requestOptions = {
	method: 'POST',
	headers: myHeaders,
	redirect: 'follow',
};

// fetch(baseUrl, requestOptions)
// 	.then((response) => response.json())
// 	.then((result) => console.log(result))
// 	.catch((error) => console.log('error', error));

/*
get(baseUrl + ‘/receipts’)
If the user is authorised with a cookie in the header, then a list of their receipts will be sent in the response.

get(baseUrl + ‘/receipts:receiptId’)
The server will respond with receipt information that can be displayed using html.
If the user is authorised with a cookie, then it also gets added to their db.
Should display the message added to DB if they are authorised and adding to db was successful.

Join Zoom Meeting
https://us04web.zoom.us/j/9844208485?pwd=aVd0YkVGakhFdHN0ZTRxR1A2TFVtUT09

Meeting ID: 984 420 8485
Passcode: 7pRfxj



*/