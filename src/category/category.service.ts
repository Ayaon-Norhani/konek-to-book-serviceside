import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDto } from '../entities/category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryDto)
        private categoryRepository: Repository<CategoryDto>,
    ){}

  async create(application: CategoryDto): Promise<CategoryDto> {
    return this.categoryRepository.save(application);
  }

  async findAll(): Promise<CategoryDto[]> {
    return this.categoryRepository.find();
  }

  async findOne(Category_ID: number): Promise<CategoryDto> {
    return this.categoryRepository.findOne(Category_ID);
  }

  async update(Category_ID: number, application: CategoryDto) {
    return this.categoryRepository.update(Category_ID, application);
  }

  async deleteOne(Category_ID: number) {
    return this.categoryRepository.delete(Category_ID);
  }
}
