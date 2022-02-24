import { Test, TestingModule } from '@nestjs/testing';
import { BookFinesController } from './book-fines.controller';

describe('BookFinesController', () => {
  let controller: BookFinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookFinesController],
    }).compile();

    controller = module.get<BookFinesController>(BookFinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
