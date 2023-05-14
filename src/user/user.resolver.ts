import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { inputUser, inputUpdateUser } from './inputs';
import { UpdateUserDto, UserDto } from './dtos';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserDto])
  async getUsers() {
    return this.userService.getUsers();
  }

  @Query(() => UserDto)
  async getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Mutation(() => UserDto)
  async createUser(@Args('data') data: inputUser) {
    return this.userService.createUser(data);
  }

  @Mutation(() => UpdateUserDto)
  async updateUser(@Args('data') data: inputUpdateUser) {
    return this.userService.updateUser(data);
  }
}
