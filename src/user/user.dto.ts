import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export interface IUser {
  id?: number;
  U_First_Name: string;
  U_Middle_Name: string;
  U_Last_Name: string;
  username?: string;
  password?: string;
  Gender: string;
  U_Birth_Date: string;
  Address: string;
  U_Contact_Number: string;
  email?: string;
  User_Type?: 'admin' | 'librarian';
  User_Status: 'active' | 'inactive';
  url: string;
}

export class RegisterUserDto implements IUser {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ default: 'Jyyhan' })
  @Column({ length: 100 })
  U_First_Name: string;

  @ApiProperty({ default: 'Munsay', required: false })
  @Column({ length: 100, nullable: true })
  U_Middle_Name: string;

  @ApiProperty({ default: 'Alango' })
  @Column({ length: 100 })
  U_Last_Name: string;

  @ApiProperty({ default: 'Female' })
  @Column({ length: 100 })
  Gender: string;

  @ApiProperty({ default: '12/15/1998' })
  @Column({ length: 100 })
  U_Birth_Date: string;

  @ApiProperty({ default: 'Marawi City' })
  @Column({ length: 100 })
  Address: string;

  @ApiProperty({ default: '09501888973', required: false })
  @Column({ length: 100, nullable: true })
  U_Contact_Number: string;

  @ApiProperty({ default: 'default@gmail.com', required: false })
  @Column({ length: 100, nullable: true })
  email?: string;

  @ApiProperty({ default: 'admin' })
  @Column({ length: 100 })
  User_Type?: 'admin' | 'librarian';

  @ApiProperty({ default: 'active' })
  @Column({ length: 100 })
  User_Status: 'active' | 'inactive';

  @ApiProperty({ default: 'user' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ default: 'password' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty()
  @Column()
  url: string;
}

export class LoginUserDto implements IUser {
  id?: number;
  U_First_Name: string;
  U_Middle_Name: string;
  U_Last_Name: string;
  Gender: string;
  U_Birth_Date: string;
  Address: string;
  U_Contact_Number: string;
  url: string;
  @ApiProperty()
  username?: string;
  @ApiProperty()
  password?: string;
  email?: string;
  User_Type?: 'admin' | 'librarian';
  User_Status: 'active' | 'inactive';
}

export class RefreshDto {
  @ApiProperty({
    required: true,
    minLength: 5,
  })
  refresh_token: string;
}

export class AccessTokenDto {
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  accessToken?: string;
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  refreshToken?: string;
}
