
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MaquinaVirtual {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ip: string;

  @Column()
  url: string;


}