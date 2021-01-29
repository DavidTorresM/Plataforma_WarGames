import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categoria {

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  @PrimaryGeneratedColumn()
  id: number;

  
  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  @Column()
  nombre: string;

}