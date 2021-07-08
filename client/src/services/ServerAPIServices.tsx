import { Receipt, User, LoginInformation } from '../interfaces/types';

const baseUrl = 'http://localhost:3005';

export const getUserReceipts = async (): Promise<Receipt[]> => {
	try {
		const response = await fetch(`${baseUrl}/receipts`, {
			method: 'GET',
			credentials: 'include',
		});
		return await response.json();
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const createUser = async (user: User): Promise<User> => {
	try {
		const response = await fetch(`${baseUrl}/users/register`, {
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

export const logout = async (): Promise<boolean> => {
	try {
		const response = await fetch(`${baseUrl}/users/logout`, {
			method: 'POST',
			credentials: 'include',
		});
		if (response.ok) return true;
		return false;
	} catch (err) {
		throw new Error(err);
	}
};

export const getReceiptByid = async (id: string): Promise<Receipt> => {
	const response = await fetch(`${baseUrl}/receipts/${id}`, {
		method: 'GET',
		credentials: 'include',
	});
	return response.json();
};
