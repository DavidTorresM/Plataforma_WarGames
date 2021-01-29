
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Pregunta } from '../pregunta/pregunta.entity';
import { Categoria } from '../categoria/categoria.entity';

@Entity()
export class Sala {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  dificultad: string;//enum


  @OneToMany(() => Pregunta, pregunta => pregunta.id)
  preguntas: Pregunta[];

  
  @ManyToMany(() => Categoria)
  @JoinTable()
  categories: Categoria[];
}