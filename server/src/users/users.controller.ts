import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	HttpCode,
	BadRequestException,
	ConflictException,
	Res,
} from '@nestjs/common';
import HashidsService from 'services/hashid/hashid.service';
import { Response } from 'express';
import jwt = require('jsonwebtoken');
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

const { SECRET_KEY } = process.env;

@Controller('users')
export class UsersController {
	constructor(
		private readonly usersService: UsersService,
		private hashidsService: HashidsService,
	) {}

	@Post()
	async create(
		@Body() createUserDto: CreateUserDto,
		@Res({ passthrough: true }) response: Response,
	) {
		const user = await this.usersService.findByEmail(createUserDto.email);
		if (user.length !== 0) throw new ConflictException();
		else {
			const { password, ...restOfUserInfo } = createUserDto;
			const hashedPassword = await bcrypt.hash(password, 12);
			const newUser = await this.usersService.create({
				password: hashedPassword,
				...restOfUserInfo,
			});
			const hashedId = this.hashidsService.encode(+newUser.id);
			const encodedUserId = jwt.sign({ userId: hashedId }, SECRET_KEY, {
				expiresIn: '3h',
			});
			response.cookie('userId', encodedUserId);
			return {
				email: newUser.email,
				accountCreate: true,
			};
		}
	}

	@Post('login')
	async login(
		@Body('email') email: string,
		@Body('password') password: string,
		@Res({ passthrough: true }) response: Response,
	) {
		const user = await this.usersService.findOne(email);
		if (!user) throw new BadRequestException('Invalid credentials');
		if (!(await bcrypt.compare(password, user.password))) {
			throw new BadRequestException('Invalid credentials');
		}
		const hashedId = this.hashidsService.encode(+user.id);
		const encodedUserId = jwt.sign({ userId: hashedId }, SECRET_KEY, {
			expiresIn: '3h',
		});
		response.cookie('userId', encodedUserId);
		return {
			message: 'success',
		};
	}

	@Delete(':id')
	@HttpCode(204)
	async remove(
		@Param('id') id: string,
		@Res({ passthrough: true }) response: Response,
	) {
		const userId = this.hashidsService.decode(id);
		const isUserRemoved = await this.usersService.remove(userId);
		if (!isUserRemoved) throw new BadRequestException("User doesn't exist");
		response.clearCookie('userId');
		return 'User was successfully removed';
	}

	@Get(':id/receipts')
	@HttpCode(200)
	async getAllUserReceipts(@Param('id') id: string) {
		const userId = this.hashidsService.decode(id);
		const receiptsFound = await this.usersService.findAllUserReceipts(userId);
		if (receiptsFound === undefined)
			throw new BadRequestException('No receipts here');
		const receipts = receiptsFound.map((receipt) => ({
			...receipt,
			id: this.hashidsService.encode(receipt.id),
		}));
		return { receipts };
	}

	@Post('logout')
	async logout(@Res({ passthrough: true }) response: Response) {
		if (response.locals.userId) {
			response.clearCookie('userId');
			return 'logout successful';
		}
		return 'you cannot logout if you are not logged in';
	}
}
