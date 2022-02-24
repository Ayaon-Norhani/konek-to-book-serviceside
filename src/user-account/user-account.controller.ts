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
  import { UserAccountDto } from '../entities/user-account.dto';
  import { UserAccountService } from './user-account.service';


@Controller('user-account')
export class UserAccountController {
    constructor(private useraccountsService: UserAccountService) {}

    @ApiBody({ type: UserAccountDto })
    @ApiOperation({
      summary: 'Add new User',
      operationId: 'AddUser',
    })
    @ApiResponse({ status: 200, type: UserAccountDto })
    @Post()
    async create(@Body() job: UserAccountDto): Promise<UserAccountDto> {
      return this.useraccountsService.create(job);
    }
  
    @ApiOperation({ summary: 'Get all User', operationId: 'GetUser' })
    @ApiResponse({ status: 200, type: UserAccountDto })
    @Get()
    async findAll(): Promise<UserAccountDto[]> {
      return this.useraccountsService.findAll();
    }
  
    @ApiOperation({ summary: 'Get User by ID', operationId: 'GetUser' })
    @ApiResponse({ status: 200, type: UserAccountDto })
    @Get(':UserID')
    async findOne(@Param('UserID') User_ID: number): Promise<UserAccountDto> {
      return this.useraccountsService.findOne(User_ID);
    }
  
    @ApiOperation({ summary: 'Update User by ID', operationId: 'UpdateUserrs' })
    @Put(':UserID')
    async update(@Param('UserID') User_ID: number, @Body() job: UserAccountDto) {
      return this.useraccountsService.update(User_ID, job);
    }
  
    @ApiResponse({ status: 200, type: UserAccountDto })
    @Delete(':UserID')
    async delete(@Param('UserID') User_ID: number) {
      return this.useraccountsService.deleteOne(User_ID);
    }
  }
  
