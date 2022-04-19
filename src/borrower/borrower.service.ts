import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BorrowerDto } from '../entities/borrower.dto';
import { Repository } from 'typeorm';


@Injectable()
export class BorrowerService {
    constructor(
         @InjectRepository(BorrowerDto)
         private borrowerRepository: Repository<BorrowerDto>,
    ) {}
    
    async create(application: BorrowerDto): Promise<BorrowerDto> {
        return this.borrowerRepository.save(application);
      }
    
      async findAll(): Promise<BorrowerDto[]> {
        return this.borrowerRepository.find({
          relations: [],
        });
      }
    
      async findOne(Borrower_ID: number): Promise<BorrowerDto> {
        return this.borrowerRepository.findOne(Borrower_ID);
      }
    
      async update(Borrower_ID: number, application: BorrowerDto) {
        return this.borrowerRepository.update(Borrower_ID, application);
      }
    
      async deleteOne(Borrower_ID: number) {
        return this.borrowerRepository.delete(Borrower_ID);
      }
    }
    