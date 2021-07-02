import type Store from '../../stores/entities/store.interface';
import type User from '../../users/entities/user.interface';
import type Category from './category.interface';
import ProductInterface from './product.interface';

export default interface Receipt {
	id: number;
	timeOfPurchase: Date;
	products: ProductInterface[];
	total: number;
	currency: string;
	paymentMethod: string;
	cardNumber: string;
	misc?: string;
	store: Store;
	user: User;
	category: Category;
}
