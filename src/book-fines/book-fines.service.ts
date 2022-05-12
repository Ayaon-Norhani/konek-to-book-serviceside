import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookFinesDto } from '../entities/book-fines.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BookFinesService {
  constructor(
    @InjectRepository(BookFinesDto)
    private bookfinesRepository: Repository<BookFinesDto>,
  ) {}

  async create(application: BookFinesDto): Promise<BookFinesDto> {
    return this.bookfinesRepository.save(application);
  }

  async findAll(): Promise<BookFinesDto[]> {
    return this.bookfinesRepository.find({
      relations: ['book', 'issued', 'borrower'],
    });
  }

  async findOne(BookFines_ID: number): Promise<BookFinesDto> {
    return this.bookfinesRepository.findOne(BookFines_ID);
  }

  async update(BookFines_ID: number, application: BookFinesDto) {
    return this.bookfinesRepository.update(BookFines_ID, application);
  }

  async deleteOne(BookFines_ID: number) {
    return this.bookfinesRepository.delete(BookFines_ID);
  }
}
