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
  User_Type?: 'admin' | 'cashier';
  User_Status: 'active' | 'inactive';
}

export class RegisterUserDto implements IUser {
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
  @ApiProperty()
  username?: string;
  @ApiProperty()
  password?: string;
  email?: string;
  User_Type?: 'admin' | 'cashier';
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
