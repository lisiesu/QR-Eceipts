import { IsEmail, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	password: string;

	@IsEmail()
	email: string;

	@IsDateString()
	dateOfBirth: string;

	@IsNotEmpty()
	address: string;
}
