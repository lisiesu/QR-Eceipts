import ProductInterface from 'receipts/entities/product.interface';
import Store from 'receipts/entities/store.interface';
import Category from 'receipts/entities/category.interface';
import { IsString, IsNotEmpty, IsDateString, IsNumber } from 'class-validator';

export default class CreateReceiptDto {
	@IsDateString()
	@IsNotEmpty()
	timeOfPurchase: Date;

	@IsNotEmpty()
	products: ProductInterface[];

	@IsNotEmpty()
	@IsNumber()
	total: number;

	@IsNotEmpty()
	@IsString()
	currency: string;

	@IsNotEmpty()
	@IsString()
	paymentMethod: string;

	@IsNotEmpty()
	@IsNumber()
	cardNumber: number;

	@IsString()
	misc?: string;

	@IsNotEmpty()
	store: Store;

	@IsNotEmpty()
	category: Category;
}
