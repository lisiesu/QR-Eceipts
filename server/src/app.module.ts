import * as dotenv from 'dotenv';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthMiddleware } from './auth/auth.middleware';
import { ReceiptsModule } from './receipts/receipts.module';
import { UsersModule } from './users/users.module';
import { StoresModule } from './stores/stores.module';
import AppController from './app.controller';
import AppService from './app.service';
import { UserSchema } from './users/entities/user.entity';
import { StoreSchema } from './stores/entities/store.entity';
import { ReceiptSchema } from './receipts/entities/receipt.entity';
import { CategorySchema } from './categories/entities/category.entity';
import { CategoryModule } from './categories/categories.module';

dotenv.config();

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			database: process.env.POSTGRES_DB,
			entities: [UserSchema, StoreSchema, ReceiptSchema, CategorySchema],
			synchronize: true,
		}),
		ReceiptsModule,
		UsersModule,
		StoresModule,
		CategoryModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export default class AppModule {
	constructor(private connection: Connection) {}

	configure(consumer: MiddlewareConsumer) {
		consumer.apply(AuthMiddleware).forRoutes('receipts', 'users');
	}
}
