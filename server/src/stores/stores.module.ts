import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoreSchema } from './entities/store.entity';
import { StoresController } from './stores.controller';

@Module({
	imports: [TypeOrmModule.forFeature([StoreSchema])],
	controllers: [StoresController],
	providers: [StoresService],
})
export class StoresModule {}
