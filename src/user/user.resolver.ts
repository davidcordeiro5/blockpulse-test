import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserEntity } from './entities/user.entity';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';
import { inputUser } from './inputs/user.input';

@Resolver((of) => UserEntity)
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
}
