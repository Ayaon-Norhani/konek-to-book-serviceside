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
  import { BorrowerDto } from '../entities/borrower.dto';
  import { BorrowerService } from './borrower.service';
 

@Controller('borrower')
export class BorrowerController {
    constructor(private borrowersService: BorrowerService) {}

  @ApiBody({ type: BorrowerDto })
  @ApiOperation({
    summary: 'Add new Borrower',
    operationId: 'AddBorrower',
  })
  @ApiResponse({ status: 200, type: BorrowerDto })
  @Post()
  async create(@Body() job: BorrowerDto): Promise<BorrowerDto> {
    return this.borrowersService.create(job);
  }

  @ApiOperation({ summary: 'Get all Borrower', operationId: 'GetBorrowers' })
  @ApiResponse({ status: 200, type: BorrowerDto })
  @Get()
  async findAll(): Promise<BorrowerDto[]> {
    return this.borrowersService.findAll();
  }

  @ApiOperation({ summary: 'Get Borrower by ID', operationId: 'GetBorrower' })
  @ApiResponse({ status: 200, type: BorrowerDto })
  @Get(':BorrowerID')
  async findOne(@Param('BorrowerID') Borrower_ID: number): Promise<BorrowerDto> {
    return this.borrowersService.findOne(Borrower_ID);
  }

  @ApiOperation({ summary: 'Update Borrower by ID', operationId: 'UpdateBorrower' })
  @Put(':BorrowerID')
  async update(@Param('BorrowerID') Borrower_ID: number, @Body() job: BorrowerDto) {
    return this.borrowersService.update(Borrower_ID, job);
  }

  
  @ApiOperation({
    summary: 'Update Borrowers by ID',
    operationId: 'DeleteBorrower',
  }) 


  @ApiResponse({ status: 200, type: BorrowerDto })
  @Delete(':BorrowerID')
  async delete(@Param('BorrowerID') Borrower_ID: number) {
    return this.borrowersService.deleteOne(Borrower_ID);
  }
}
