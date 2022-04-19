import { ApiProperty } from '@nestjs/swagger';
import { Publisher } from '../interfaces/publisher.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookDto } from './book.dto';

@Entity('publisher')
export class PublisherDto implements Publisher {
  @PrimaryGeneratedColumn()
  Publisher_ID?: number;

  @ApiProperty({ example: '0928-192-9' , required: false})
  @Column({ length: 100, nullable: true })
  Publisher: string;

  @ApiProperty({ example: '01-02-1978' , required: false})
  @Column({ length: 100 , nullable: true})
  DateOfPublication: string;

  @ApiProperty({ example: 'California', required: false })
  @Column({ length: 100, nullable: true })
  PlaceOfPublication: string;

  @OneToMany(() => BookDto, (books) => books.publishers, {
    nullable: true,
  })
  bookpublisher: BookDto[];
}
