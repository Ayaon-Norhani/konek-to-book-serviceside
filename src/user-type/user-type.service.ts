import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTypeDto } from '../entities/user-type.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserTypeService {
    constructor(
        @InjectRepository(UserTypeDto)
        private usertypeRepository: Repository<UserTypeDto>,
      ) {}
    
      async create(application: UserTypeDto): Promise<UserTypeDto> {
        return this.usertypeRepository.save(application);
      }
    
      async findAll(): Promise<UserTypeDto[]> {
        return this.usertypeRepository.find();
      }
    
      async findOne(UserType_ID: number): Promise<UserTypeDto> {
        return this.usertypeRepository.findOne(UserType_ID);
      }
    
      async update(UserType_ID: number, application: UserTypeDto) {
        return this.usertypeRepository.update(UserType_ID, application);
      }
    
      async deleteOne(UserType_ID: number) {
        return this.usertypeRepository.delete(UserType_ID);
      }
    }
    
