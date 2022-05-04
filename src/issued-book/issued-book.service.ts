import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IssuedBookDto } from '../entities/issued-book.dto';
import { Like, Repository } from 'typeorm';

@Injectable()
export class IssuedBookService {
    constructor(
        @InjectRepository(IssuedBookDto)
        private issuebookRepository: Repository<IssuedBookDto>,
    ) {}
 
    async create(application: IssuedBookDto): Promise<IssuedBookDto> {
        return this.issuebookRepository.save(application);
      }
    
      async findAll(): Promise<IssuedBookDto[]> {
        return this.issuebookRepository.find();
      }
    
      async findOne(IssuedBook_ID: number): Promise<IssuedBookDto> {
        return this.issuebookRepository.findOne(IssuedBook_ID);
      }
    
      async update(IssuedBook_ID: number, application: IssuedBookDto) {
        return this.issuebookRepository.update(IssuedBook_ID, application);
      }
    
      async deleteOne(IssuedBook_ID: number) {
        return this.issuebookRepository.delete(IssuedBook_ID);
      }

      async filter(keyword: string): Promise<IssuedBookDto[]> {
        return this.issuebookRepository.find({
          relations: ['fines'],
          select: ['Title'],
          where: { IssuedBook_Status: Like(`%${keyword}%`) },
        });
      }
    }
    
