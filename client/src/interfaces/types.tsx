export interface Receipt {
	id: string;
	timeOfPurchase: string;
	products: Product[];
	total: number;
	currency: string;
	paymentMethod: string;
	cardNumber: number;
	misc: string;
	user: string;
	store: string;
}

export interface Product {
	product: string;
	price: number;
	vat: number;
	isRefunded: boolean;
}
