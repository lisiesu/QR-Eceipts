import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ReceiptsModule } from './receipts/receipts.module';
import { UsersModule } from './users/users.module';
import { StoresModule } from './stores/stores.module';
import AppController from './app.controller';
import AppService from './app.service';
import Users from './users/entities/user.entity';
import { StoreSchema } from './stores/entities/store.entity';
import Receipts from './receipts/entities/receipt.entity';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'user_prod',
			password: 'magical_password',
			database: 'QREceipt',
			entities: [Users, StoreSchema, Receipts],
			synchronize: true,
		}),
		ReceiptsModule,
		UsersModule,
		StoresModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export default class AppModule {}
