import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
  } from '@nestjs/common';
  import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
  import { CategoryDto } from '../entities/category.dto';
  import { CategoryService } from './category.service';

  
@Controller('category')
export class CategoryController {
    constructor(private categorysService: CategoryService) {}

    @ApiBody({ type: CategoryDto })
    @ApiOperation({
    summary: 'Add new Category',
    operationId: 'AddCategory',
  })
  @ApiResponse({ status: 200, type: CategoryDto })
  @Post()
  async create(@Body() job: CategoryDto): Promise<CategoryDto> {
    return this.categorysService.create(job);
  }

  @ApiOperation({ summary: 'Get all Category', operationId: 'GetCategory' })
  @ApiResponse({ status: 200, type: CategoryDto })
  @Get()
  async findAll(): Promise<CategoryDto[]> {
    return this.categorysService.findAll();
  }

  @ApiOperation({ summary: 'Get Category by ID', operationId: 'GetCategory' })
  @ApiResponse({ status: 200, type: CategoryDto })
  @Get(':CategoryID')
  async findOne(@Param('CategoryID') Category_ID: number): Promise<CategoryDto> {
    return this.categorysService.findOne(Category_ID);
  }

  @ApiOperation({ summary: 'Update Category by ID', operationId: 'UpdateUserrs' })
  @Put(':CategoryID')
  async update(@Param('CategoryID') Category_ID: number, @Body() job: CategoryDto) {
    return this.categorysService.update(Category_ID, job);
  }

  @ApiResponse({ status: 200, type: CategoryDto })
  @Delete(':CategoryID')
  async delete(@Param('CategoryID') Category_ID: number) {
    return this.categorysService.deleteOne(Category_ID);
  }
}

