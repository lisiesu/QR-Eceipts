import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	BadRequestException,
	ConflictException,
} from '@nestjs/common';
import HashidsService from 'services/hashid/hashid.service';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';

@Controller('stores')
export class StoresController {
	constructor(
		private readonly storesService: StoresService,
		private hashidsService: HashidsService,
	) {}

	@Post()
	async create(@Body() createStoreDto: CreateStoreDto) {
		const storeInDB = await this.storesService.alreadyInDB(
			createStoreDto.storeNumber,
		);
		if (storeInDB) throw new ConflictException('Store already exists');
		const store = await this.storesService.create(createStoreDto);
		const { id, address, logo, name, storeNumber, telephoneNumber, website } =
			store;

		return {
			id: this.hashidsService.encode(id),
			address,
			logo,
			name,
			storeNumber,
			telephoneNumber,
			website,
		};
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		const storeId = this.hashidsService.decode(id);
		const store = await this.storesService.findOne(storeId);
		if (store === undefined) throw new BadRequestException('No such store');
		const { address, logo, name, storeNumber, telephoneNumber, website } =
			store;

		return {
			address,
			logo,
			name,
			storeNumber,
			telephoneNumber,
			website,
		};
	}
}
