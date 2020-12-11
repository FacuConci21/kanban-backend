import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { UsersService } from "./users.service";
import { IUsers } from "./interfaces/users.interface";

describe('UsersController', () => {
  let controller: UsersController;
  let servive: UsersService;
  let uInterface: IUsers;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    servive = await module.resolve(UsersService);
  });

  describe('findAll', () => {
    it('should return all the records of user´s colletion', async () => {
      const result = [];

      jest.spyOn(servive, 'findAll').mockImplementation(() => result);

      expect(await controller.getUsers()).toBe(result);
    })
  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
