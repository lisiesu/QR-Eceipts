import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';

@Injectable()
export class ReceiptsService {
	create(createReceiptDto: CreateReceiptDto) {
		return createReceiptDto;
	}

	findAll() {
		return `This action returns all receipts`;
	}

	findOne(id: number) {
		return `This action returns a #${id} receipt`;
	}

	update(id: number, updateReceiptDto: UpdateReceiptDto) {
		return updateReceiptDto;
	}

	remove(id: number) {
		return `This action removes a #${id} receipt`;
	}
}
