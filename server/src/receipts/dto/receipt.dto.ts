import ProductInterface from 'receipts/entities/product.interface';
import Category from '../entities/category.interface';

export class ReceiptDto {
	id: string;

	timeOfPurchase: Date;

	products: ProductInterface[];

	total: number;

	currency: string;

	paymentMethod: string;

	cardNumber: number;

	misc?: string;

	store: string;

	user: string;

	category: Category;
}
