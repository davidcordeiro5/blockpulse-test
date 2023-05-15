import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const user = new UserEntity();
user.firstname = 'firstname';
user.lastname = 'lastname';
user.email = 'email@email.com';
user.password = 'password';
user.isAdmin = true;

describe('UserService', () => {
  let service: UserService;

  const mockedGetUsers = {
    query: jest.fn(() => Promise.resolve(user)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: mockedGetUsers,
        },
      ],
    }).compile();

    service = await module.get(UserService);
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

    expect(service.getUsers()).toBe(user);
  });
});
