import { Test, TestingModule } from '@nestjs/testing';
import { BorrowerService } from './borrower.service';

describe('BorrowerService', () => {
  let service: BorrowerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BorrowerService],
    }).compile();

    service = module.get<BorrowerService>(BorrowerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
