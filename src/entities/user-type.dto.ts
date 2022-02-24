import { ApiProperty } from '@nestjs/swagger';
import { UserType } from '../interfaces/user-type.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usertype')
export class UserTypeDto implements UserType {
    @PrimaryGeneratedColumn()
    UserType_ID?: number;

    @ApiProperty({ example: 'Librarian' })
    @Column({ length: 100 })
    Description: string;
}
