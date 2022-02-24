import { Test, TestingModule } from '@nestjs/testing';
import { BorrowerController } from './borrower.controller';

describe('BorrowerController', () => {
  let controller: BorrowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BorrowerController],
    }).compile();

    controller = module.get<BorrowerController>(BorrowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
