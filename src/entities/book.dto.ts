import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../interfaces/book.interface';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuthorDto } from './author.dto';
import { CategoryDto } from './category.dto';
import { PublisherDto } from './publisher.dto';
import { BookFinesDto } from './book-fines.dto';

@Entity('book')
export class BookDto implements Book {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  Book_ID?: number;

  @ApiProperty({ example: '0976-755' })
  @Column({ length: 100 })
  ISBN: string;

  @ApiProperty({ example: '906', required: false })
  @Column({ length: 100, nullable: true })
  Call_Number: string;

  @ApiProperty({ example: 'Data Structure and Algorithms' })
  @Column({ length: 100 })
  Title: string;

  @ApiProperty({ example: '2nd Edition', required: false })
  @Column({ length: 100, nullable: true })
  Edition: string;

  @ApiProperty({ example: '567809', required: false })
  @Column({ length: 100, nullable: true })
  DateOfPublication: string;

  @ApiProperty({ example: 'ii', required: false })
  @Column({ length: 100, nullable: true })
  Pages: string;

  @ApiProperty({ example: '2nd Series', required: false })
  @Column({ length: 100, nullable: true })
  Series: string;

  @ApiProperty({ example: 'comment or concern', required: false })
  @Column({ length: 100, nullable: true })
  Notes: string;

  @ApiProperty({ example: 'New' })
  @Column({ length: 100 })
  Book_Status: string;

  @ApiProperty({ example: 'YES' })
  @Column({ length: 100 })
  Availability: 'Yes' | 'No';

  /* @ManyToMany(() => AuthorDto)
  @JoinTable({ name: 'Author_ID' })
  authors: AuthorDto[];

   @ManyToOne(() => AuthorDto, (authors) => authors.books)
  @JoinColumn({ name: 'Author_ID' })
  authors: AuthorDto[];

  @ManyToOne(() => CategoryDto, (categories) => categories.books)
  @JoinColumn({ name: 'Category_ID' })
  categories: CategoryDto[];

  @ManyToOne(() => PublisherDto, (publishers) => publishers.books)
  @JoinColumn({ name: 'Publisher_ID' })
  publishers: PublisherDto[];

   @OneToMany(() => BookFinesDto, (fine) => fine.book)
  fine: BookFinesDto;
*/

  @ApiProperty({ required: false, type: () => AuthorDto })
  @ManyToOne(() => AuthorDto, (authors) => authors.bookauthors)
  authors: AuthorDto;

  @ApiProperty({ required: false, type: () => CategoryDto })
  @ManyToOne(() => CategoryDto, (categories) => categories.bookcategory)
  categories: CategoryDto;

  @ApiProperty({ required: false, type: () => PublisherDto })
  @ManyToOne(() => PublisherDto, (publishers) => publishers.bookpublisher, {
    nullable: true,
  })
  publishers: PublisherDto;

  @OneToMany(() => BookFinesDto, (fine) => fine.book)
  fine: BookFinesDto[];
}
