import type Store from '../../stores/entities/store.interface';

export default interface Receipt {
	id: number;
	timeOfPurchase: Date;
	content: JSON;
	store: Store;
}
