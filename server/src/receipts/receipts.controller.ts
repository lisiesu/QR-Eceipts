import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
	Req,
	Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import QRCode from '../qrcode/qrcodeGenerator';
import { ReceiptsService } from './receipts.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
// import { ReceiptDto } from './dto/receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
// import error from 'express';

@Controller('receipts')
export class ReceiptsController {
	constructor(private readonly receiptsService: ReceiptsService) {}

	@Post()
	async create(@Body() createReceiptDto: CreateReceiptDto) {
		console.log(createReceiptDto);
		const receipt = await this.receiptsService.create(createReceiptDto);
		const url = `localhost:3000/receipts/${receipt.id}`;
		const qrcode = QRCode.generate(url);
		return { qrcode };
	}

	// @Post(':userId/:receiptId')
	// transferToUser(
	// 	@Param('receiptId') receiptId: string,
	// 	@Param('userId') userId: string,
	// ) {
	// 	return {
	// 		userId,
	// 		receiptId,
	// 	};
	// }

	// @Get(':userId')
	// FindAllForKey(@Param('userId') userId: string, @Query() queries) {
	// 	return { userId, ...queries };
	// }

	// @Get(':userId')
	// findAllForOneUser(@Param('userId') userId: string) {
	// 	return userId;
	// }

	@Get()
	async findAll(@Req() request: Request, @Res() response: Response) {
		const cookie = request.cookies;
		console.log(cookie.id);
		let receipts: any = 'you are not logged in';
		if (cookie) {
			receipts = await this.receiptsService.findAll(cookie.id);
		}
		// response.cookie('id', 1);
		response.send(receipts);
	}

	@Get(':id')
	findOne(@Req() request: Request, @Query() queries) {
		console.log(queries);
		return request.headers;
		// return this.receiptsService.findOne(id);
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
}
