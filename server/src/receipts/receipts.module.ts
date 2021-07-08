import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import HashidsService from 'services/hashid/hashid.service';
import HashReceipt from 'services/receipt/hashReceipt.service';
import { ReceiptsService } from './receipts.service';
import { ReceiptsController } from './receipts.controller';
import { ReceiptSchema } from './entities/receipt.entity';
import QRCodeService from '../services/qrcode/qrcode.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReceiptSchema])],
  controllers: [ReceiptsController],
  providers: [ReceiptsService, HashidsService, QRCodeService, HashReceipt],
})
export class ReceiptsModule {}
