import type Store from '../../stores/entities/store.interface';
import type User from '../../users/entities/user.interface';
import type Category from './category.interface';

export default interface Receipt {
	id: number;
	timeOfPurchase: Date;
	content: JSON;
	store: Store;
	user: User;
	category: Category;
}
