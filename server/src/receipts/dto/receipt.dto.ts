import ProductInterface from '../entities/product.interface';
import Category from '../entities/category.interface';
import Store from '../entities/store.interface';

export default class ReceiptDto {
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
