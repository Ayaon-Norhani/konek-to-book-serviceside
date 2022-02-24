import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../interfaces/book.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('book')
export class BookDto implements Book {
    @PrimaryGeneratedColumn()
    Book_ID?: number;

    @ApiProperty({ example: '0976-755' })
    @Column({ length: 100 })
    ISBN: string;

    @ApiProperty({ example: '906' })
    @Column({ length: 100 })
    Call_Number: string;

    @ApiProperty({ example: 'Data Structure and Algorithms' })
    @Column({ length: 100 })
    Title: string;

    @ApiProperty({ example: '2nd Edition' })
    @Column({ length: 100 })
    Edition: string;

    @ApiProperty({ example: '567809' })
    @Column({ length: 100 })
    DateOfPublication: string;

    @ApiProperty({ example: 'ii' })
    @Column({ length: 100 })
    Pages: string;

    @ApiProperty({ example: 'jakka' })
    @Column({ length: 100 })
    Series: string;

    @ApiProperty({ example: 'comment or concern' })
    @Column({ length: 100 })
    Notes: string;

    @ApiProperty({ example: 'New' })
    @Column({ length: 100 })
    Book_Status: string;

    @ApiProperty({ example: 'YES' })
    @Column({ length: 100 })
    Availability: string;
 
    
}
