import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Req,
	Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import QRCode from '../helpers/qrcode/qrcodeGenerator';
import { ReceiptsService } from './receipts.service';
import CreateReceiptDto from './dto/create-receipt.dto';
import UpdateReceiptDto from './dto/update-receipt.dto';
// import error from 'express';
const { BASE_URL } = process.env;

@Controller('receipts')
export class ReceiptsController {
	constructor(private readonly receiptsService: ReceiptsService) {}

	@Get('/provideCookie/:userid')
	async provideCookie(
		@Res() response: Response,
		@Param('userid') userId: string,
	) {
		response.cookie('id', userId);
		response.send();
	}

	@Post()
	async create(@Body() createReceiptDto: CreateReceiptDto) {
		const receipt: any = await this.receiptsService.create(createReceiptDto);
		const url = `${BASE_URL}/${receipt.id}`;
		const qrcode = QRCode.generate(url);
		return { qrcode };
	}

	@Get()
	async findAll(@Req() request: Request, @Res() response: Response) {
		const cookie = request.cookies;
		let receipts: any = 'you are not logged in';
		if (cookie) {
			receipts = await this.receiptsService.findAll(cookie.id);
		}
		response.send(receipts);
	}

	@Get(':id')
	async findOne(
		@Param() id: string,
		@Req() request: Request,
		@Res() response: Response,
	) {
		const receipt = this.receiptsService.findOne(+id);
		const userId = request.cookies;
		if (userId) {
			await this.receiptsService.update(id, { user: userId });
		}
		response.send({ ...receipt, addedToDatabase: true });
	}

	@Patch()
	update(@Param('id') id: string, @Body() updateReceiptDto: UpdateReceiptDto) {
		this.receiptsService.update(id, updateReceiptDto);
		return UpdateReceiptDto;
	}

	@Delete(':id')
	remove(@Param('id') id: number) {
		return this.receiptsService.remove(id);
	}

	// @Query() queries
}
