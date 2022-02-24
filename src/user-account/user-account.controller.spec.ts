import { Test, TestingModule } from '@nestjs/testing';
import { UserAccountController } from './user-account.controller';

describe('UserAccountController', () => {
  let controller: UserAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAccountController],
    }).compile();

    controller = module.get<UserAccountController>(UserAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
