import { ApiProperty } from '@nestjs/swagger';
import { BookFines } from '../interfaces/book-fines.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BorrowerDto } from './borrower.dto';

@Entity('bookfines')
export class BookFinesDto implements BookFines {
  @PrimaryGeneratedColumn()
  BookFines_ID?: number;

  @ApiProperty({ example: '09-23-22' })
  @Column({ length: 100 })
  Fine_Date: string;

  @ApiProperty({ example: 'P5.00' })
  @Column({ length: 100 })
  Payment_Amount: string;

  @ApiProperty({ example: 'Pay' })
  @Column({ length: 100 })
  Payment_Status: string;
  borrowers: any;

  @ManyToOne(() => BorrowerDto, (borrower) => borrower.fine)
  @JoinColumn({ name: 'Borrower_ID' })
  borrower: BorrowerDto[];
  
}
