import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Res,
    UploadedFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import {
    ApiBody,
    ApiConsumes,
    ApiOperation,
    ApiResponse,
  } from '@nestjs/swagger';
  import { Response } from 'express';
  import { MediaDto } from '../entities/Media.dto';
  import { MediaService } from './media.service';
  
  @Controller('media')
  export class MediaController {
    constructor(private mediaService: MediaService) {}
    @ApiConsumes('multipart/form-data')
    @ApiBody({
      schema: {
        type: 'object',
        properties: {
          file: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    })
    @ApiOperation({
      summary: 'Add Media',
      operationId: 'UploadMedia',
    })
    @ApiResponse({ status: 201, type: MediaDto })
    @Post('/uploadFile')
    @UseInterceptors(FileInterceptor('file'))
    async upload(@UploadedFile() file: Express.Multer.File) {
      return await this.mediaService.uploadFile(file);
    }
  
    @ApiOperation({
      summary: 'Get Media by Media_id',
      operationId: 'GetMedia',
    })
    @ApiResponse({ status: 201, type: MediaDto })
    @Get(':Media_id')
    async downloadFile(@Param('Media_id') Media_id: number, @Res() res: Response) {
      const fileinfo = await this.mediaService.findOne(Media_id);
      res.type(fileinfo.mimeType).send(Buffer.from(fileinfo.data));
    }
  
    @ApiOperation({
      summary: 'Delete Media by Media_id',
      operationId: 'DeleteMedia',
    })
    @ApiResponse({ status: 200, type: MediaDto })
    @Delete(':Media_id')
    async delete(@Param('Media_id') Media_id: number) {
      return this.mediaService.deleteOne(Media_id);
    }
  }
  