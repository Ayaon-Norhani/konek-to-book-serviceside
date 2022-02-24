import { ApiProperty } from '@nestjs/swagger';
import { Publisher } from '../interfaces/publisher.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('publisher')
export class PublisherDto implements Publisher {
    @PrimaryGeneratedColumn()
    Publisher_ID?: number;

    @ApiProperty({ example: 'jjkkkk' })
    @Column({ length: 100 })
    Publisher: string;

    @ApiProperty({ example: 'jnjaxjb' })
    @Column({ length: 100 })
    DateOfPublication: string;

    @ApiProperty({ example: 'California' })
    @Column({ length: 100 })
    PlaceOfPublication: string;
    
}
