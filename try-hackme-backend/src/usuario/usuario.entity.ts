
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true})
  email: string;

  @Column({unique:true})
  nick: string;

}