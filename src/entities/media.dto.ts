import { Media } from '../interfaces/media.interface';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('profileImage')
export class MediaDto implements Media {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  Media_id?: number;

  @ApiProperty()
  @Column()
  mimeType: string;

  @ApiProperty({ required: false })
  @Column()
  filename: string;

  @Column({
    type: 'mediumblob',
  })
  data: Uint8Array;
}