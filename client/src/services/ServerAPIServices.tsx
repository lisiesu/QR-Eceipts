import { Receipt, User, LoginInformation } from '../interfaces/types';

const baseUrl = 'http://localhost:3005';

export const getUserReceipts = async (user_Id: string): Promise<Receipt[]> => {
	try {
		const response = await fetch(`${baseUrl}/receipts`);
		return await response.json();
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
			credentials: 'include',
		});
		if (response.ok) return await response.json();
		throw new Error(response.statusText);
	} catch (err) {
		throw new Error(err);
	}
};

export const login = async (
	loginInformation: LoginInformation
): Promise<User> => {
	try {
		const response = await fetch(`${baseUrl}/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loginInformation),
			credentials: 'include',
		});
		if (response.ok) return await response.json();
		throw new Error(response.statusText);
	} catch (err) {
		throw new Error(err);
	}
};

export const getReceiptByid = async (id: string): Promise<Receipt> => {
	const response = await fetch(`${baseUrl}/id`);
	return response.json();
};
