import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserResolver, UserService],
  controllers: [UserController],
})
export class UserModule {}
