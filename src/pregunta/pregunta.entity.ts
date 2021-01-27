
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Sala } from '../sala/sala.entity';

@Entity()
export class Pregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  texto: string;

  @Column()
  respuesta: string;


  @Column()
  idSala: number;

  @ManyToOne(()=>Sala,sala => sala.id)
  sala: Sala


}