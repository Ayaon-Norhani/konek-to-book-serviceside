import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorDto } from '../entities/author.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorDto)
    private authorRepository: Repository<AuthorDto>,
  ) {}

  async create(application: AuthorDto): Promise<AuthorDto> {
    return this.authorRepository.save(application);
  }

  async findAll(): Promise<AuthorDto[]> {
    return this.authorRepository.find();
  }

  async findOne(Author_ID: number): Promise<AuthorDto> {
    return this.authorRepository.findOne(Author_ID);
  }

  async update(Author_ID: number, application: AuthorDto) {
    return this.authorRepository.update(Author_ID, application);
  }

  async deleteOne(Author_ID: number) {
    return this.authorRepository.delete(Author_ID);
  }
}
