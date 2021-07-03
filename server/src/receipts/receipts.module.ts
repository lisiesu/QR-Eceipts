import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import HashidsService from 'services/hashid/hashid.service';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';
import { ReceiptSchema } from './entities/receipt.entity';

@Module({
	imports: [TypeOrmModule.forFeature([ReceiptSchema])],
	controllers: [ReceiptsController],
	providers: [ReceiptsService, HashidsService],
})
export class ReceiptsModule {}
