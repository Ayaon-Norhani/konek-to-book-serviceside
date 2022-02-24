import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from '../interfaces/author.interface';

@Entity('author')
export class AuthorDto implements Author {
  @PrimaryGeneratedColumn()
  Author_ID?: number;

  @ApiProperty({ example: 'Nur' })
  @Column({ length: 100 })
  A_First_Name: string;

  @ApiProperty({ example: 'G' })
  @Column({ length: 100 })
  A_Middle_Name: string;

  @ApiProperty({ example: 'Alango' })
  @Column({ length: 100 })
  A_Last_Name: string;

  @ApiProperty({ example: 'Marawi City' })
  @Column({ length: 100 })
  Location: string;
}
