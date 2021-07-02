import { UpdateProductInterface } from 'receipts/entities/updateProduct.interface';

export class UpdateReceiptDto {
	products?: UpdateProductInterface[];

	user?: string;

	misc?: string;
}
