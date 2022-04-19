import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from '../interfaces/author.interface';
import { BookDto } from './book.dto';

@Entity('author')
export class AuthorDto implements Author {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  Author_ID?: number;

  @ApiProperty({ example: 'Nur' })
  @Column({ length: 100 })
  A_First_Name: string;

  @ApiProperty({ example: 'G', required: false })
  @Column({ length: 100, nullable: true })
  A_Middle_Name: string;

  @ApiProperty({ example: 'Alango' })
  @Column({ length: 100 })
  A_Last_Name: string;

  @ApiProperty({ example: 'Marawi City' })
  @Column({ length: 100 })
  Location: string;

  @OneToMany(() => BookDto, (books) => books.authors)
  bookauthors: BookDto[];
}
