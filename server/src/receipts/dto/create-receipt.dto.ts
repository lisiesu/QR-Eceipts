import Category from 'receipts/entities/category.interface';
import ProductInterface from 'receipts/entities/product.interface';

export class CreateReceiptDto {
	id?: string;

	timeOfPurchase: Date;

	products: ProductInterface[];

	total: number;

	currency: string;

	paymentMethod: string;

	cardNumber: number;

	misc?: string;

	store: string;

	user?: string;

	category: Category;
}
