export default class ProductInterface {
	id: string;

	product: string;

	price: number;

	vat: number;

	isRefunded: boolean;

	refundDate?: Date;
}
