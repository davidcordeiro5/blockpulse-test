import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';
import { UserDto, UpdateUserDto } from './dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {}

  async getUsers() {
    return await this.UserRepository.find();
  }

  async getUserById(id: string) {
    return await this.UserRepository.findOneBy({ id: id });
  }

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

  async updateUser(data: UpdateUserDto): Promise<UserEntity> {
    const user = await this.getUserById(data.id);
    let userUpdated = new UserEntity();
    userUpdated = { ...user, ...data };

    await this.UserRepository.save(userUpdated);

    return userUpdated;
  }
}
