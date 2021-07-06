import * as dotenv from 'dotenv';
import {
	Controller,
	Get,
	Post,
	Body,
	// Patch,
	Param,
	Delete,
	Res,
} from '@nestjs/common';
import { Response } from 'express';
import jwt = require('jsonwebtoken');
import HashidsService from 'services/hashid/hashid.service';
import QRCodeService from '../services/qrcode/qrcode.service';
import { ReceiptsService } from './receipts.service';
import CreateReceiptDto from './dto/create-receipt.dto';

dotenv.config();
// import error from 'express';
const { BASE_URL, SECRET_KEY } = process.env;

@Controller('receipts')
export class ReceiptsController {
	constructor(
		private readonly receiptsService: ReceiptsService,
		private hashidsService: HashidsService,
		private qrCodeService: QRCodeService,
	) {}

	@Get('/provideCookie/:userid')
	async provideCookie(
		@Res() response: Response,
		@Param('userid') userId: string,
	) {
		const hashedId = this.hashidsService.encode(+userId);
		const encodedUserId = jwt.sign({ userId: hashedId }, SECRET_KEY, {
			expiresIn: '3h',
		});
		response.cookie('userId', encodedUserId);
		response.send();
	}

	@Post()
	async create(@Body() createReceiptDto: CreateReceiptDto) {
		const receipt: any = await this.receiptsService.create(createReceiptDto);
		const hashedId = this.hashidsService.encode(receipt.id);
		const url = `${BASE_URL}/${hashedId}`;
		const qrcode = this.qrCodeService.generate(url);
		console.log(hashedId);
		return { qrcode };
	}

	@Get()
	async findAll(@Res() response: Response) {
		const userId: number = this.hashidsService.decode(response.locals.userId);
		let receipts: any = 'User account not found!';
		if (userId) {
			receipts = await this.receiptsService.findAll(userId);
			receipts = receipts.forEach((receipt) => {
				const hashedId = this.hashidsService.encode(receipt.id);
				return { id: hashedId, ...receipt };
			});
		}
		response.send(receipts);
	}

	@Get(':id')
	async findOne(@Param('id') hashedId: string, @Res() response: Response) {
		const receiptId: number = this.hashidsService.decode(hashedId);
		const receipt = await this.receiptsService.findOne(receiptId);
		const userId: number = this.hashidsService.decode(response.locals.userId);
		let receiptUpdated = false;
		if (userId && receipt) {
			await this.receiptsService.update(receiptId, { user: userId });
			receiptUpdated = true;
		}
		response.send({ ...receipt, id: hashedId, receiptUpdated });
	}

	// @Patch()
	// update(@Param('id') id: string, @Body() updateReceiptDto: UpdateReceiptDto) {
	// 	this.receiptsService.update(+id, updateReceiptDto);
	// 	return UpdateReceiptDto;
	// }

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.receiptsService.remove(id);
	}

	// @Query() queries
}
