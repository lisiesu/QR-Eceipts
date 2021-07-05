import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Receipt from './entities/receipt.interface';
import { ReceiptSchema } from './entities/receipt.entity';
import CreateReceiptDto from './dto/create-receipt.dto';
import UpdateReceiptDto from './dto/update-receipt.dto';

@Injectable()
export class ReceiptsService {
	constructor(
		@InjectRepository(ReceiptSchema)
		private receiptsRepository: Repository<Receipt | CreateReceiptDto>,
	) {}

	create(createReceiptDto: CreateReceiptDto) {
		return this.receiptsRepository.save(createReceiptDto);
	}

	findAll(id) {
		return this.receiptsRepository.find({ where: { user: id } });
	}

	findOne(id: number) {
		return this.receiptsRepository.findOne(id);
	}

	update(id: number, updateReceiptDto: UpdateReceiptDto) {
		const newId = Number(id);
		return this.receiptsRepository.update(newId, updateReceiptDto);
	}

	remove(id: number) {
		return this.receiptsRepository.delete(id);
	}
}
