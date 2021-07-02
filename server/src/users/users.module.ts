import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './entities/user.entity';
import HashidsService from '../services/hashid/hashid.service';

@Module({
	imports: [TypeOrmModule.forFeature([UserSchema])],
	controllers: [UsersController],
	providers: [UsersService, HashidsService],
})
export class UsersModule {}
