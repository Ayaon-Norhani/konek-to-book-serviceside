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
import { PublisherDto } from '../entities/publisher.dto';
import { PublisherService } from './publisher.service';

@Controller('publisher')
export class PublisherController {
    constructor(private publishersService: PublisherService) {}

    @ApiBody({ type: PublisherDto })
    @ApiOperation({
    summary: 'Add new Publisher',
    operationId: 'AddPublisher',
  })
  @ApiResponse({ status: 200, type: PublisherDto })
  @Post()
  async create(@Body() job: PublisherDto): Promise<PublisherDto> {
    return this.publishersService.create(job);
  }

  @ApiOperation({ summary: 'Get all Publisher', operationId: 'GetPublishers' })
  @ApiResponse({ status: 200, type: PublisherDto })
  @Get()
  async findAll(): Promise<PublisherDto[]> {
    return this.publishersService.findAll();
  }

  @ApiOperation({ summary: 'Get Publisher by ID', operationId: 'GetPublisher' })
  @ApiResponse({ status: 200, type: PublisherDto })
  @Get(':PublisherID')
  async findOne(@Param('PublisherID') Publisher_ID: number): Promise<PublisherDto> {
    return this.publishersService.findOne(Publisher_ID);
  }

  @ApiOperation({ summary: 'Update Publisher by ID', operationId: 'UpdatePublisher' })
  @Put(':PublisherID')
  async update(@Param('PublisherID') Publisher_ID: number, @Body() job: PublisherDto) {
    return this.publishersService.update(Publisher_ID, job);
  }

  @ApiOperation({
    summary: 'Update Publishers by ID',
    operationId: 'DeletePublisher',
  })

  @ApiResponse({ status: 200, type: PublisherDto })
  @Delete(':PublisherID')
  async delete(@Param('PublisherID') Publisher_ID: number) {
    return this.publishersService.deleteOne(Publisher_ID);
  }
}
