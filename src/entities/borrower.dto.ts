import { ApiProperty } from '@nestjs/swagger';
import { Borrower } from '../interfaces/borrower.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('borrower')
export class BorrowerDto implements Borrower{
    @PrimaryGeneratedColumn()
    Borrower_ID?: number;

    @ApiProperty({ example: '201812567' })
    @Column({ length: 100 })
    Student_ID: string;

    @ApiProperty({ example: 'Najmah' })
    @Column({ length: 100 })
    B_First_Name: string;

    @ApiProperty({ example: 'A' })
    @Column({ length: 100 })
    B_Middle_Name: string;

    @ApiProperty({ example: 'Omar'})
    @Column({ length: 100 })
    B_Last_Name: string;

    @ApiProperty({ example: '4th Year'})
    @Column({ length: 100 })
    YearLevel: string;

    @ApiProperty({ example: '0984'})
    @Column({ length: 100 })
    B_Contact_Number: string;
}
