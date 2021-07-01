export default interface Receipt {
	id: string;
	timeOfPurchase: Date;
	products: ProductInterface[];
	total: number;
	currency: string;
	paymentMethod: string;
	cardNumber: string;
	misc?: string;
	store: Store;
	category: Category;
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
	address: string;
	logo: string;
	storeNumber: string;
}
export interface Category {
	id: number;
	name: string;
}
