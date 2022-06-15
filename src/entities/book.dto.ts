import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../interfaces/book.interface';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryDto } from './category.dto';
import { PublisherDto } from './publisher.dto';
import { BookFinesDto } from './book-fines.dto';
import { IssuedBookDto } from './issued-book.dto';

@Entity('book')
export class BookDto implements Book {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  Book_ID?: number;

  @ApiProperty({ example: '0976-755' })
  @Column({ length: 100 })
  ISBN: string;

  @ApiProperty({ example: 'Mikaela D. Cruz' })
  @Column({ length: 1000 })
  Author: string;

  @ApiProperty({ example: '906', required: false })
  @Column({ length: 100, nullable: true })
  Call_Number: string;

  @ApiProperty({ example: 'Data Structure and Algorithms' })
  @Column()
  Title: string;

  @ApiProperty({ example: '2nd Edition', required: false })
  @Column({ nullable: true })
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
  @Column({ nullable: true })
  Notes: string;

  @ApiProperty({ example: 'New' })
  @Column({ length: 100 })
  Book_Status: string;

  @ApiProperty({ example: 'YES' })
  @Column({ length: 100 })
  Availability: 'Yes' | 'No';

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

  @OneToMany(() => IssuedBookDto, (issue) => issue.books)
  issue: IssuedBookDto[];
}
