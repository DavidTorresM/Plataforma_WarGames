import { Injectable,HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Marcador } from '../marcador.entity';
import { MarcadorDTO } from '../interface/marcador.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { throws } from 'assert';
@Injectable()
export class MarcadorService {

    constructor(
        @InjectRepository(Marcador) private repositorioMarcador: Repository< Marcador >, 
    ){}
    async crearMarcador(marcadordto: MarcadorDTO): Promise< Marcador > {
        let marcador = this.repositorioMarcador.create(marcadordto);
        return this.repositorioMarcador.save(marcador);
    }
    async obtenerMarcadors(): Promise < Marcador[] > {
        return this.repositorioMarcador.find();
    }
    async obtenerMarcador(id:number): Promise < Marcador|null > {
        return this.obtenerMarcadorPorCampo("id",`${id}`);
    }
    async updateMarcador( marcadorDTO:MarcadorDTO ): Promise < Marcador|null > {
        await this.repositorioMarcador.update({id:marcadorDTO.id},marcadorDTO);
        return this.obtenerMarcadorPorCampo("id",`${marcadorDTO.id}`);
    }
    async deleteMarcador( id:number ): Promise < Marcador|null > {
        let marcador = this.obtenerMarcadorPorCampo("id",`${id}`);
        return (await this.repositorioMarcador.delete({id})).raw;
    }
    async obtenerMarcadorPorCampo(nombre: string, valor: string): Promise< Marcador | null> {
        const campos = {
        [nombre]: valor,
        };

        const marcador = await this.repositorioMarcador.findOne(
        campos,
        //{ relations: relacionesMarcador }
        );

        if (!marcador) {
            throw new NotFoundException();
        }

        return marcador;
    }

    
}
