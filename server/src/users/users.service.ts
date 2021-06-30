import {
	Injectable,
	ConflictException,
	InternalServerErrorException,
} from '@nestjs/common';
import Hashids = require('hashids');
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSchema } from './entities/user.entity';
import User from './entities/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const hashids = new Hashids();

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UserSchema)
		private repository: Repository<User>,
	) {}

	async create(createUserDto: CreateUserDto) {
		try {
			const found = await this.repository.find({
				where: { email: createUserDto.email },
			});
			if (found.length !== 0) throw new ConflictException(); // Without querying before the id counter increases even if TypeORM save fails.
			const user = this.repository.create(createUserDto);
			const userSaved = await this.repository.save(user);
			return userSaved;
		} catch (err) {
			const { code, status } = err;
			if (code === '23505' || status === 409) throw new ConflictException(); // code refers to TypeORM save() error and status for ConlictException error.
			throw new InternalServerErrorException();
		}
	}

	findAll() {
		return hashids.encode(1234);
	}

	findOne(id: number) {
		return `This action returns a #${id} user`;
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return updateUserDto;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
