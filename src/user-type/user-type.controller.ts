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
  import { UserTypeDto } from '../entities/user-type.dto';
  import { UserTypeService } from './user-type.service';
 
@Controller('user-type')
export class UserTypeController {
    constructor(private usertypesService: UserTypeService) {}

    @ApiBody({ type: UserTypeDto })
    @ApiOperation({
      summary: 'Add new UserType',
      operationId: 'AddUserType',
    })
    @ApiResponse({ status: 200, type: UserTypeDto })
    @Post()
    async create(@Body() job: UserTypeDto): Promise<UserTypeDto> {
      return this.usertypesService.create(job);
    }
  
    @ApiOperation({ summary: 'Get all UserType', operationId: 'GetUserType' })
    @ApiResponse({ status: 200, type: UserTypeDto })
    @Get()
    async findAll(): Promise<UserTypeDto[]> {
      return this.usertypesService.findAll();
    }
  
    @ApiOperation({ summary: 'Get UserType by ID', operationId: 'GetUserType' })
    @ApiResponse({ status: 200, type: UserTypeDto })
    @Get(':UserTypeID')
    async findOne(@Param('UserTypeID') UserType_ID: number): Promise<UserTypeDto> {
      return this.usertypesService.findOne(UserType_ID);
    }
  
    @ApiOperation({ summary: 'Update UserType by ID', operationId: 'UpdateUserrs' })
    @Put(':UserTypeID')
    async update(@Param('UserTypeID') UserType_ID: number, @Body() job: UserTypeDto) {
      return this.usertypesService.update(UserType_ID, job);
    }
  
    @ApiResponse({ status: 200, type: UserTypeDto })
    @Delete(':UserTypeID')
    async delete(@Param('UserTypeID') UserType_ID: number) {
      return this.usertypesService.deleteOne(UserType_ID);
    }
  }
  