import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UserDto } from './dtos';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  async getUsers(): Promise<UserEntity[]> {
    const data = await this.userService.getUsers();
    return data;
  }

  @Get('/:id')
  async getUserById(@Param() param: UserDto): Promise<UserEntity> {
    console.log('param', param.id);
    const data = await this.userService.getUserById(param.id);
    return data;
  }
}
