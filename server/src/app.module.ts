import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReceiptsModule } from './receipts/receipts.module';
import { UsersModule } from './users/users.module';
import { StoresModule } from './stores/stores.module';
import AppController from './app.controller';
import AppService from './app.service';

@Module({
	imports: [TypeOrmModule.forRoot(), ReceiptsModule, UsersModule, StoresModule],
	controllers: [AppController],
	providers: [AppService],
})
export default class AppModule {}
