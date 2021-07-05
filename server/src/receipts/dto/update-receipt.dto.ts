import UpdateProductInterface from '../entities/updateProduct.interface';

export default class UpdateReceiptDto {
	products?: UpdateProductInterface[];

	user?: number;

	misc?: string;
}
