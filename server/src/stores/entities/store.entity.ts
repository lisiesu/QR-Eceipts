import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Store {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	users: string;

	@Column()
	address: string;

	@Column()
	number: string;

	@Column()
	logo: string;

	@Column()
	category: string;
}
