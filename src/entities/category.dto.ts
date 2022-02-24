import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../interfaces/category.interface';


@Entity('category')
export class CategoryDto implements Category {
    @PrimaryGeneratedColumn()
    Category_ID?: number;

    @ApiProperty({ example: 'Thesis' })
    @Column({ length: 100 })
    C_Description: string;
    
}
