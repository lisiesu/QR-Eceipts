import UpdateProductInterface from '../entities/updateProduct.interface';

export default class UpdateReceiptDto {
	products: UpdateProductInterface[];

	misc?: string;
}
