import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookDto } from '../entities/book.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookDto)
    private bookRepository: Repository<BookDto>,
  ) {}

  async create(application: BookDto): Promise<BookDto> {
    return this.bookRepository.save(application);
  }

  async findAll(): Promise<BookDto[]> {
    return this.bookRepository.find({
      relations: ['authors', 'categories', 'publishers'],
    });
  }

  async findOne(Book_ID: number): Promise<BookDto> {
    return this.bookRepository.findOne(Book_ID);
  }

  async update(Book_ID: number, application: BookDto) {
    return this.bookRepository.update(Book_ID, application);
  }

  async deleteOne(Book_ID: number) {
    return this.bookRepository.delete(Book_ID);
  }
}
