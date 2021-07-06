import ProductInterface from './product.interface';

export default interface CreateReceipt {
	id?: number;
	timeOfPurchase: Date;
	products: ProductInterface[];
	total: number;
	currency: string;
	paymentMethod: string;
	cardNumber: string;
	misc?: string;
	store: number;
	category: number;
}
