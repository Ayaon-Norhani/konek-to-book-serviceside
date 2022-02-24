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
  import { BookFinesDto } from '../entities/book-fines.dto';
  import { BookFinesService } from './book-fines.service';
 
  
@Controller('book-fines')
export class BookFinesController {
    constructor(private bookfinesService: BookFinesService){}

    @ApiBody({ type: BookFinesDto })
    @ApiOperation({
      summary: 'Add new fine',
      operationId: 'AddBookFines',
    })
    @ApiResponse({ status: 200, type: BookFinesDto })
    @Post()
    async create(@Body() job: BookFinesDto): Promise<BookFinesDto> {
      return this.bookfinesService.create(job);
    }
  
    @ApiOperation({ summary: 'Get all BookFines', operationId: 'GetBookFines' })
    @ApiResponse({ status: 200, type: BookFinesDto })
    @Get()
    async findAll(): Promise<BookFinesDto[]> {
      return this.bookfinesService.findAll();
    }
  
    @ApiOperation({ summary: 'Get BookFines by ID', operationId: 'GetBookFines' })
    @ApiResponse({ status: 200, type: BookFinesDto })
    @Get(':BookFinesID')
    async findOne(@Param('BookFinesID') BookFines_ID: number): Promise<BookFinesDto> {
      return this.bookfinesService.findOne(BookFines_ID);
    }
  
    @ApiOperation({ summary: 'Update BookFines by ID', operationId: 'UpdateUserrs' })
    @Put(':BookFinesID')
    async update(@Param('BookFinesID') BookFines_ID: number, @Body() job: BookFinesDto) {
      return this.bookfinesService.update(BookFines_ID, job);
    }
  
    @ApiResponse({ status: 200, type: BookFinesDto })
    @Delete(':BookFinesID')
    async delete(@Param('BookFinesID') BookFines_ID: number) {
      return this.bookfinesService.deleteOne(BookFines_ID);
    }
  }
  
