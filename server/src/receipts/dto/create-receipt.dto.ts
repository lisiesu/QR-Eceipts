import ProductInterface from 'receipts/entities/product.interface';
import Store from 'receipts/entities/store.interface';
import Category from 'receipts/entities/category.interface';

export default class CreateReceiptDto {
	timeOfPurchase: Date;

	products: ProductInterface[];

	total: number;

	currency: string;

	paymentMethod: string;

	cardNumber: number;

	misc?: string;

	store: Store;

	category: Category;
}
