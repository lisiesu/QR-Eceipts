import Category from 'receipts/entities/category.interface';
import ProductInterface from 'receipts/entities/product.interface';

export default class CreateReceiptDto {
	timeOfPurchase: Date;

	products: ProductInterface[];

	total: number;

	currency: string;

	paymentMethod: string;

	cardNumber: number;

	misc?: string;

	store: string;

	category: Category;
}
