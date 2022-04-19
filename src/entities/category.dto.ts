import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../interfaces/category.interface';
import { BookDto } from './book.dto';

@Entity('category')
export class CategoryDto implements Category {
  @ApiProperty({ required: false })
  @PrimaryGeneratedColumn()
  Category_ID?: number;

  @ApiProperty({ example: 'Thesis' })
  @Column({ length: 100 })
  C_Description: string;

  @OneToMany(() => BookDto, (books) => books.categories, {
    nullable: true,
  })
  bookcategory: BookDto[];
}
