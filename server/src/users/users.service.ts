import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSchema } from './entities/user.entity';
import User from './entities/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UserSchema)
		private usersRepository: Repository<User>,
	) {}

	create(createUserDto: CreateUserDto) {
		this.usersRepository.create({});
		return createUserDto;
	}

	findAll() {
		return this.usersRepository.find();
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
