import { Test, TestingModule } from '@nestjs/testing';
import { BookFinesService } from './book-fines.service';

describe('BookFinesService', () => {
  let service: BookFinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookFinesService],
    }).compile();

    service = module.get<BookFinesService>(BookFinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
