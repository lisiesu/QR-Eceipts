import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	password: string;

	@Column()
	email: string;

	@Column({ type: 'date' })
	dateOfBirth: string;

	@Column()
	address: string;
}
