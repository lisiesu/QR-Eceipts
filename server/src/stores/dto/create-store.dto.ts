import { IsOptional, IsString } from 'class-validator';

export class CreateStoreDto {
	@IsString()
	address: string;

	@IsOptional()
	logo?: string;

	@IsString()
	telephoneNumber: string;

	@IsString()
	storeNumber: string;

	@IsOptional()
	website?: string;
}
