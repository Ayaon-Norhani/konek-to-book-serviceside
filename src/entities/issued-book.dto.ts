import { ApiProperty } from '@nestjs/swagger';
import { IssuedBook } from '../interfaces/issued-book.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BorrowerDto } from './borrower.dto';
import { BookDto } from './book.dto';
import { BookFinesDto } from './book-fines.dto';

@Entity('issuedbook')
export class IssuedBookDto implements IssuedBook {
  @PrimaryGeneratedColumn()
  IssuedBook_ID?: number;

  @ApiProperty({ example: 'Algorithms' })
  @Column({ length: 100 })
  Title: string;

  @ApiProperty({ example: '09-12-21' })
  @Column({ length: 100 })
  Borrow_Date: string;

  @ApiProperty({ example: '09-23-21' })
  @Column({ length: 100 })
  Due_Date: string;

  @ApiProperty({ example: 'Old' })
  @Column({ length: 100 })
  Book_Status: string;

  @ApiProperty({ example: 'Pay' })
  @Column({ length: 100 })
  IssuedBook_Status: string;

  @ManyToOne(() => BorrowerDto, (borrowerss) => borrowerss.issued)
  @JoinColumn({ name: 'Borrower_ID' })
  borrowerss: BorrowerDto[];
  
  @ManyToOne(() => BookFinesDto, (fines) => fines.issued)
  @JoinColumn({ name: 'BookFines_ID' })
  fines: BookFinesDto[];

  @OneToOne(() => BookDto)
  @JoinColumn({ name: 'Book_ID' })
  book: BookDto;


}
