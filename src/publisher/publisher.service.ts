import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublisherDto } from '../entities/publisher.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PublisherService {
    constructor(
        @InjectRepository(PublisherDto)
        private publisherRepository: Repository<PublisherDto>,
      ) {}
    
      async create(application: PublisherDto): Promise<PublisherDto> {
        return this.publisherRepository.save(application);
      }
    
      async findAll(): Promise<PublisherDto[]> {
        return this.publisherRepository.find();
      }
    
      async findOne(Publisher_ID: number): Promise<PublisherDto> {
        return this.publisherRepository.findOne(Publisher_ID);
      }
    
      async update(Publisher_ID: number, application: PublisherDto) {
        return this.publisherRepository.update(Publisher_ID, application);
      }
    
      async deleteOne(Publisher_ID: number) {
        return this.publisherRepository.delete(Publisher_ID);
      }  
}
