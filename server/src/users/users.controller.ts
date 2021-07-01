import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	HttpCode,
	BadRequestException,
	ConflictException,
} from '@nestjs/common';
import HashidsService from 'services/hashid/hashid.service';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private hashidsService: HashidsService,
	) {}

	@Post()
	async create(@Body() createUserDto: CreateUserDto) {
		const usersFound = await this.usersService.findByEmail(createUserDto.email);
		if (usersFound.length !== 0) throw new ConflictException();
		else {
			const newUser = await this.usersService.create(createUserDto);
			const { id, address, dateOfBirth, email, name } = newUser;
			return {
				id: this.hashidsService.encode(id),
				address,
				dateOfBirth,
				email,
				name,
			};
		}
	}

	@Patch(':id') // TODO
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		// return this.usersService.update(+id, updateUserDto);
		this.usersService.update(+id, updateUserDto);
		throw new BadRequestException();
	}

	@Delete(':id')
	@HttpCode(204)
	async remove(@Param('id') id: string) {
		const userId = this.hashidsService.decode(id);
		const isUserRemoved = await this.usersService.remove(userId);
		if (!isUserRemoved) throw new BadRequestException();
	}

	@Get(':id/receipts')
	@HttpCode(200)
	async getAllUserReceipts(@Param('id') id: string) {
		const userId = this.hashidsService.decode(id);
		const receiptsFound = await this.usersService.findAllUserReceipts(userId);
		if (receiptsFound === undefined) throw new BadRequestException();
		const receipts = receiptsFound.map((receipt) => ({
			...receipt,
			id: this.hashidsService.encode(receipt.id),
		}));
		return { receipts };
	}
}
