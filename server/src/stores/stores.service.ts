import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
	create(createStoreDto: CreateStoreDto) {
		return createStoreDto;
	}

	findAll() {
		return `This action returns all stores`;
	}

	findOne(id: number) {
		return `This action returns a #${id} store`;
	}

	update(id: number, updateStoreDto: UpdateStoreDto) {
		return updateStoreDto;
	}

	remove(id: number) {
		return `This action removes a #${id} store`;
	}
}
