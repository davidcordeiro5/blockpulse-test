import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { UserResolver } from './user.resolver';

describe('UserService', () => {
  let service: UserService;
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserEntity],
      providers: [UserResolver, UserService],
    }).compile();

    service = module.get<UserService>(UserService);
    resolver = new UserResolver(service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all users', async () => {
    const user: any = new UserEntity();
    user.firstname = 'firstname';
    user.lastname = 'lastname';
    user.email = 'email';
    user.password = 'password';
    user.isAdmin = true;

    jest.spyOn(service, 'getUsers').mockImplementation(() => user);

    expect(await resolver.getUsers()).toBe(user);
  });
});
