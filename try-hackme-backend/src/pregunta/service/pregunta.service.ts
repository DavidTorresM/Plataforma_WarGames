import { Injectable,HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Pregunta } from '../pregunta.entity';
import { PreguntaDTO } from '../interface/pregunta.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { throws } from 'assert';
@Injectable()
export class PreguntaService {

    constructor(
        @InjectRepository(Pregunta) private repositorioPregunta: Repository< Pregunta >, 
    ){}
    async crearPregunta(preguntadto: PreguntaDTO): Promise< Pregunta > {
        let pregunta = this.repositorioPregunta.create(preguntadto);
        return this.repositorioPregunta.save(pregunta);
    }
    async obtenerPreguntas(): Promise < Pregunta[] > {
        return this.repositorioPregunta.find();
    }
    async obtenerPregunta(id:number): Promise < Pregunta|null > {
        return this.obtenerPreguntaPorCampo("id",`${id}`);
    }
    async updatePregunta( preguntaDTO:PreguntaDTO ): Promise < Pregunta|null > {
        await this.repositorioPregunta.update({id:preguntaDTO.id},preguntaDTO);
        return this.obtenerPreguntaPorCampo("id",`${preguntaDTO.id}`);
    }
    async deletePregunta( id:number ): Promise < Pregunta|null > {
        let pregunta = this.obtenerPreguntaPorCampo("id",`${id}`);
        return (await this.repositorioPregunta.delete({id})).raw;
    }
    async obtenerPreguntaPorCampo(nombre: string, valor: string): Promise< Pregunta | null> {
        const campos = {
        [nombre]: valor,
        };

        const pregunta = await this.repositorioPregunta.findOne(
        campos,
        //{ relations: relacionesPregunta }
        );

        if (!pregunta) {
            throw new NotFoundException();
        }

        return pregunta;
    }

    
}
