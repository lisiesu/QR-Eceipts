import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSchema } from './entities/user.entity';
import User from './entities/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UserSchema)
		private repository: Repository<User>,
	) {}

	async create(createUserDto: CreateUserDto): Promise<User> {
		const user = this.repository.create(createUserDto);
		const userSaved = await this.repository.save(user);
		return userSaved;
	}

	async findByEmail(email: string): Promise<User[]> {
		const users = await this.repository.find({
			where: { email },
		});
		return users;
	}

	async remove(id: number): Promise<boolean> {
		const confirmation = await this.repository.delete(id);
		return confirmation.affected !== 0;
	}

	async findAllUserReceipts(id: number) {
		const found = await this.repository.findOne({
			select: ['id'],
			where: { id },
			relations: ['receipts'],
		});
		return found !== undefined ? found.receipts : undefined;
	}
}
