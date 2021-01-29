
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Sala } from '../sala/sala.entity';

@Entity()
export class Marcador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('timestamp with time zone')
  horaEntrada: Date;

  @Column()
  puntos?: number;


  @Column()
  voto?: number;
  
  @Column()
  idSala: number;

  @Column()
  idUsuario: number;

  @OneToMany(() => Sala,sala=>sala.id)
  @JoinColumn([{
    name: 'idSala',
    referencedColumnName: 'id',
  }])
  sala: Sala;

  @OneToMany(() => Usuario,usuario=>usuario.id)
  @JoinColumn([{
    name: 'idUsuario',
    referencedColumnName: 'id',
  }])
  usuario: Usuario;

}