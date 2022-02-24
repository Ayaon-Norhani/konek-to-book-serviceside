import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccountDto } from '../entities/user-account.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserAccountService {
    constructor(
        @InjectRepository(UserAccountDto)
        private useraccountRepository: Repository<UserAccountDto>,
    ) {}

     async create(application: UserAccountDto): Promise<UserAccountDto> {
        return this.useraccountRepository.save(application);
      }
    
      async findAll(): Promise<UserAccountDto[]> {
        return this.useraccountRepository.find();
      }
    
      async findOne(User_ID: number): Promise<UserAccountDto> {
        return this.useraccountRepository.findOne(User_ID);
      }
    
      async update(User_ID: number, application: UserAccountDto) {
        return this.useraccountRepository.update(User_ID, application);
      }
    
      async deleteOne(User_ID: number) {
        return this.useraccountRepository.delete(User_ID);
      }
    }
    