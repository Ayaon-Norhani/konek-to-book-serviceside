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
  import { IssuedBookDto } from '../entities/issued-book.dto';
  import { IssuedBookService } from './issued-book.service';
 
@Controller('issued-book')
export class IssuedBookController {
    constructor(private issuebooksService: IssuedBookService) {}
    
    @ApiBody({ type: IssuedBookDto })
  @ApiOperation({
    summary: 'Add new IssuedBook',
    operationId: 'AddIssuedBook',
  })
  @ApiResponse({ status: 200, type: IssuedBookDto })
  @Post()
  async create(@Body() job: IssuedBookDto): Promise<IssuedBookDto> {
    return this.issuebooksService.create(job);
  }

  @ApiOperation({ summary: 'Get all IssuedBook', operationId: 'GetIssuedBook' })
  @ApiResponse({ status: 200, type: IssuedBookDto })
  @Get()
  async findAll(): Promise<IssuedBookDto[]> {
    return this.issuebooksService.findAll();
  }

  @ApiOperation({ summary: 'Get IssuedBook by ID', operationId: 'GetIssuedBook' })
  @ApiResponse({ status: 200, type: IssuedBookDto })
  @Get(':IssuedBookID')
  async findOne(@Param('IssuedBookID') IssuedBook_ID: number): Promise<IssuedBookDto> {
    return this.issuebooksService.findOne(IssuedBook_ID);
  }

  @ApiOperation({ summary: 'Update IssuedBook by ID', operationId: 'UpdateUserrs' })
  @Put(':IssuedBookID')
  async update(@Param('IssuedBookID') IssuedBook_ID: number, @Body() job: IssuedBookDto) {
    return this.issuebooksService.update(IssuedBook_ID, job);
  }

  @ApiResponse({ status: 200, type: IssuedBookDto })
  @Delete(':IssuedBookID')
  async delete(@Param('IssuedBookID') IssuedBook_ID: number) {
    return this.issuebooksService.deleteOne(IssuedBook_ID);
  }
}

