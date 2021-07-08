export interface Receipt {
	id: string;
	timeOfPurchase: Date;
	products: ProductInterface[];
	total: number;
	currency: string;
	paymentMethod: string;
	cardNumber: string;
	misc?: string;
	user: string;
	store: Store;
	category: Category;
	receiptUpdated: boolean;
}
export interface ProductInterface {
	id: string;
	product: string;
	price: number;
	vat: number;
	isRefunded: boolean;
	refundDate?: Date;
}
export interface Store {
	id: number;
	name: string;
	address?: string;
	logo?: string;
	storeNumber: string;
}
export interface Category {
	id: number;
	name: string;
	logotype: string;
}

export interface User {
	id?: string;
	address: string;
	dateOfBirth: string;
	email: string;
	name: string;
	password?: string;
	logged?: boolean;
}

export interface LoginInformation {
	email: string;
	password: string;
}
