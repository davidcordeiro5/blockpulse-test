import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {}

  async createUser(data: UserDto): Promise<UserEntity> {
    const user = new UserEntity();
    user.firstname = data.firstname;
    user.lastname = data.lastname;
    user.email = data.email;
    user.password = data.password;
    user.isAdmin = data.isAdmin;

    await this.UserRepository.save(user);

    return user;
  }

  async getUsers() {
    return await this.UserRepository.find();
  }

  async getUserById(id: string) {
    return await this.UserRepository.findOneBy({ id: id });
  }
}
