import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';
import { ReceiptSchema } from './entities/receipt.entity';

@Module({
	imports: [TypeOrmModule.forFeature([ReceiptSchema])],
	controllers: [ReceiptsController],
	providers: [ReceiptsService],
})
export class ReceiptsModule {}
