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
  import { BookDto } from '../entities/book.dto';
  import { BookService } from './book.service';


@Controller('book')
export class BookController {
  constructor(private booksService: BookService) {}
  @ApiBody({ type: BookDto })
  @ApiOperation({
    summary: 'Add new Book',
    operationId: 'AddBook',
  })
  @ApiResponse({ status: 200, type: BookDto })
  @Post()
  async create(@Body() job: BookDto): Promise<BookDto> {
    return this.booksService.create(job);
  }

  @ApiOperation({ summary: 'Get all Book', operationId: 'GetBook' })
  @ApiResponse({ status: 200, type: BookDto })
  @Get()
  async findAll(): Promise<BookDto[]> {
    return this.booksService.findAll();
  }

  @ApiOperation({ summary: 'Get Book by ID', operationId: 'GetBook' })
  @ApiResponse({ status: 200, type: BookDto })
  @Get(':BookID')
  async findOne(@Param('BookID') Book_ID: number): Promise<BookDto> {
    return this.booksService.findOne(Book_ID);
  }

  @ApiOperation({ summary: 'Update Book by ID', operationId: 'UpdateUserrs' })
  @Put(':BookID')
  async update(@Param('BookID') Book_ID: number, @Body() job: BookDto) {
    return this.booksService.update(Book_ID, job);
  }

  @ApiResponse({ status: 200, type: BookDto })
  @Delete(':BookID')
  async delete(@Param('BookID') Book_ID: number) {
    return this.booksService.deleteOne(Book_ID);
  }
}
