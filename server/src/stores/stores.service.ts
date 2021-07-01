import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreSchema } from './entities/store.entity';
import Store from './entities/store.interface';
import { CreateStoreDto } from './dto/create-store.dto';

@Injectable()
export class StoresService {
	constructor(
		@InjectRepository(StoreSchema)
		private storesRepository: Repository<Store>,
	) {}

	create(store: CreateStoreDto) {
		return this.storesRepository.save(store);
	}

	findAll(): Promise<Store[]> {
		return this.storesRepository.find();
	}

	findOne(id: number): Promise<Store> {
		return this.storesRepository.findOne(id);
	}
}
