import { Test, TestingModule } from '@nestjs/testing';
import { IssuedBookController } from './issued-book.controller';

describe('IssuedBookController', () => {
  let controller: IssuedBookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssuedBookController],
    }).compile();

    controller = module.get<IssuedBookController>(IssuedBookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
