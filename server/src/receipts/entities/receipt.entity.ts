import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Receipt {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'timestamp' })
	timeOfPurchase: Date;

	@Column({ type: 'jsonb' })
	content: JSON;
}
