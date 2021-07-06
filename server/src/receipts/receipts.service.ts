import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Receipt from './entities/receipt.interface';
import { ReceiptSchema } from './entities/receipt.entity';
import CreateReceiptDto from './dto/create-receipt.dto';
import AssignReceipt from './entities/assignReceipt.interface';

@Injectable()
export class ReceiptsService {
	constructor(
		@InjectRepository(ReceiptSchema)
		private receiptsRepository: Repository<
			Receipt | CreateReceiptDto | AssignReceipt
		>,
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

	update(id: number, user: AssignReceipt) {
		const newId = Number(id);
		return this.receiptsRepository.update(newId, user);
	}

	remove(id: number) {
		return this.receiptsRepository.delete(id);
	}
}
