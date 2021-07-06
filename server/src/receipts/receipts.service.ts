import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Receipt from './entities/receipt.interface';
import { ReceiptSchema } from './entities/receipt.entity';
import CreateReceiptDto from './dto/create-receipt.dto';
import AssignReceipt from './entities/assignReceipt.interface';
import CreateReceipt from './entities/createReceipt.interface';

@Injectable()
export class ReceiptsService {
	constructor(
		@InjectRepository(ReceiptSchema)
		private receiptsRepository: Repository<
			Receipt | CreateReceiptDto | AssignReceipt | CreateReceipt
		>,
	) {}

	create(receipt: CreateReceipt) {
		return this.receiptsRepository.save(receipt);
	}

	findAll(id) {
		return this.receiptsRepository.find({ where: { user: id } });
	}

	async findOne(id: number) {
		const receipt = await this.receiptsRepository.findOne({
			where: { id },
			relations: ['store', 'category'],
		});
		return receipt;
	}

	update(id: number, user: AssignReceipt) {
		const newId = Number(id);
		return this.receiptsRepository.update(newId, user);
	}

	remove(id: number) {
		return this.receiptsRepository.delete(id);
	}
}
