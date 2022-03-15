import { ApiProperty } from '@nestjs/swagger';
import { Users } from '../interfaces/users.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserDto implements Users {
  
  
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ default: 'Basam' })
  @Column({ length: 100 })
  U_First_Name: string;

  @ApiProperty({ default: 'Cosain', required: false })
  @Column({ length: 100, nullable: true })
  U_Middle_Name: string;

  @ApiProperty({ default: 'Serad' })
  @Column({ length: 100 })
  U_Last_Name: string;

  @ApiProperty({ default: 'Male' })
  @Column({ length: 100 })
  Gender: string;

  @ApiProperty({ default: '12/12/1998' })
  @Column({ length: 100 })
  U_Birth_Date: string;

  @ApiProperty({ default: 'Marawi City' })
  @Column({ length: 100 })
  Address: string;

  @ApiProperty({ default: '+639067342939', required: false })
  @Column({ length: 100, nullable: true })
  U_Contact_Number: string;

  @ApiProperty({ default: 'default@gmail.com', required: false })
  @Column({ length: 100, nullable: true })
  email?: string;

  @ApiProperty({ default: 'admin' })
  @Column({ length: 100 })
  User_Type?: 'admin' | 'cashier';

  @ApiProperty({ default: 'active' })
  @Column({ length: 100 })
  User_Status: 'active' | 'inactive';

  @ApiProperty({ default: 'user' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ default: 'password' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ required: false })
  @Column({ length: 255, default: '' })
  refreshToken?: string;
}
