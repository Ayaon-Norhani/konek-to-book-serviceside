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
import { AuthorDto } from '../entities/author.dto';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
  constructor(private authorsService: AuthorService) {}

  @ApiBody({ type: AuthorDto })
  @ApiOperation({
    summary: 'Add new Author',
    operationId: 'AddAuthor',
  })
  @ApiResponse({ status: 200, type: AuthorDto })
  @Post()
  async create(@Body() job: AuthorDto): Promise<AuthorDto> {
    return this.authorsService.create(job);
  }

  @ApiOperation({ summary: 'Get all Author', operationId: 'GetAuthor' })
  @ApiResponse({ status: 200, type: AuthorDto })
  @Get()
  async findAll(): Promise<AuthorDto[]> {
    return this.authorsService.findAll();
  }

  @ApiOperation({ summary: 'Get Author by ID', operationId: 'GetAuthor' })
  @ApiResponse({ status: 200, type: AuthorDto })
  @Get(':AuthorID')
  async findOne(@Param('AuthorID') Author_ID: number): Promise<AuthorDto> {
    return this.authorsService.findOne(Author_ID);
  }

  @ApiOperation({ summary: 'Update Author by ID', operationId: 'UpdateUserrs' })
  @Put(':AuthorID')
  async update(@Param('AuthorID') Author_ID: number, @Body() job: AuthorDto) {
    return this.authorsService.update(Author_ID, job);
  }

  @ApiResponse({ status: 200, type: AuthorDto })
  @Delete(':AuthorID')
  async delete(@Param('AuthorID') Author_ID: number) {
    return this.authorsService.deleteOne(Author_ID);
  }
}
