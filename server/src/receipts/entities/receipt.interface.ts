import type Store from '../../stores/entities/store.interface';
import type User from '../../users/entities/user.interface';

export default interface Receipt {
	id: number;
	timeOfPurchase: Date;
	content: JSON;
	store: Store;
	user: User;
}
