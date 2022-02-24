import { ApiProperty } from '@nestjs/swagger';
import { UserAccount } from '../interfaces/user-account.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('useraccount')
export class UserAccountDto implements UserAccount{
    @PrimaryGeneratedColumn()
    User_ID?: number;

    @ApiProperty({ example: 'Nur' })
    @Column({ length: 100 })
    U_First_Name: string;

    @ApiProperty({ example: 'M' })
    @Column({ length: 100 })
    U_Middle_Name: string;

    @ApiProperty({ example: 'Alango' })
    @Column({ length: 100 })
    U_Last_Name: string;

    @ApiProperty({ example: 'Jyyhan@gmail.com' })
    @Column({ length: 100 })
    Username: string;

    @ApiProperty({ example: 'Jyyhan12' })
    @Column({ length: 100 })
    Password: string;

    @ApiProperty({ example: 'Female' })
    @Column({ length: 100 })
    Gender: string;

    @ApiProperty({ example: '12-15-1999' })
    @Column({ length: 100 })
    U_Birth_Date: string;

    
    @ApiProperty({ example: 'Marawi City' })
    @Column({ length: 100 })
    Address: string;

    @ApiProperty({ example: '0987654321' })
    @Column({ length: 100 })
    U_Contact_Number: string;

}
