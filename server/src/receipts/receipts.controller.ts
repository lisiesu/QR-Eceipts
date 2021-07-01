import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
} from '@nestjs/common';
import QRCode = require('qrcode');
import { ReceiptsService } from './receipts.service';
import CreateReceiptDto from './dto/create-receipt.dto';
import UpdateReceiptDto from './dto/update-receipt.dto';
// import error from 'express';

function generateQrCode(url: string): string {
	const options = {
		errorCorrectionLevel: 'H',
		type: 'svg',
		color: {
			dark: '#000000',
			light: '#ffffff',
		},
	};
	const qrcode = QRCode.toString(url, options, function (error, string) {
		if (error) {
			return error;
		}
		return string;
	});
	return qrcode;
}

@Controller('receipts')
export class ReceiptsController {
	constructor(private readonly receiptsService: ReceiptsService) {}

	@Post()
	async create(@Body() createReceiptDto: CreateReceiptDto) {
		console.log(createReceiptDto);
		const receipt = await this.receiptsService.create(createReceiptDto);
		const url = `localhost:3000/receipts/${receipt.id}`;
		const qrcode = generateQrCode(url);
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
	findAll(@Query() queries) {
		// if authorised as user, return all receipts for that user.
		// if authorised as vendor, return all receipts for user if speified in query
		// using user Auth
		// filtered by user

		// optional query: ?clientId=74917
		const receipts = this.receiptsService.findAll(queries);
		return receipts;
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		console.log("Bernie's here!");
		return this.receiptsService.findOne(id);
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
