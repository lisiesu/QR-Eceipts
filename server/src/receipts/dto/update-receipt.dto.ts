import UpdateProductInterface from '../entities/updateProduct.interface';

export default class UpdateReceiptDto {
	products?: UpdateProductInterface[];

	user?: string;

	misc?: string;
}
