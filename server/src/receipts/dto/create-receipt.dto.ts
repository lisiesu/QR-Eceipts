import ProductInterface from 'receipts/entities/product.interface';
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
	cardNumber: string;

	@IsString()
	misc?: string;

	@IsNotEmpty()
	store: string;

	@IsNotEmpty()
	category: string;
}
