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
import { ReceiptsService } from './receipts.service';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { ReceiptDto } from './dto/receipt.dto';

@Controller('receipts')
export class ReceiptsController {
	constructor(private readonly receiptsService: ReceiptsService) {}

	@Post()
	create(@Body() createReceiptDto: CreateReceiptDto) {
		this.receiptsService.create(createReceiptDto);
		return createReceiptDto;
	}

	@Post(':userId/:receiptId')
	transferToUser(
		@Param('receiptId') receiptId: string,
		@Param('userId') userId: string,
	) {
		return {
			userId,
			receiptId,
		};
	}

	@Get(':userId')
	FindAllForKey(@Param('userId') userId: string, @Query() queries) {
		return { userId, ...queries };
	}

	@Get(':userId')
	findAllForOneUser(@Param('userId') userId: string) {
		return userId;
	}

	@Get()
	findAll(@Query() query) {
		// if authorised as user, return all receipts for that user.
		// if authorised as vendor, return all receipts for user is speified in query
		// using user Auth
		// filtered by user

		// optional query: ?clientId=74917
		this.receiptsService.findAll();
		return query;
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.receiptsService.findOne(id);
	}

	@Patch()
	update(@Param('id') id: string, @Body() receiptDto: ReceiptDto) {
		this.receiptsService.update(id, receiptDto);
		return receiptDto;
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.receiptsService.remove(id);
	}
}
