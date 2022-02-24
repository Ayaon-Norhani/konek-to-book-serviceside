import { Test, TestingModule } from '@nestjs/testing';
import { IssuedBookService } from './issued-book.service';

describe('IssuedBookService', () => {
  let service: IssuedBookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssuedBookService],
    }).compile();

    service = module.get<IssuedBookService>(IssuedBookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
