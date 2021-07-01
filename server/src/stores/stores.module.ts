import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import HashidsService from 'services/hashid/hashid.service';
import { StoresService } from './stores.service';
import { StoreSchema } from './entities/store.entity';
import { StoresController } from './stores.controller';

@Module({
	imports: [TypeOrmModule.forFeature([StoreSchema])],
	controllers: [StoresController],
	providers: [StoresService, HashidsService],
})
export class StoresModule {}
