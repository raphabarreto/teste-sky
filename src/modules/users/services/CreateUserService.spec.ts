import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
      phones: '99999999',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new user with the and e-mail already registered', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: '123456',
      phones: '99999999',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: '123456',
        phones: '99999999',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
