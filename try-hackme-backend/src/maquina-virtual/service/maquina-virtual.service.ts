import { Injectable,HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { MaquinaVirtual } from '../MaquinaVirtual.entity';
import { MaquinaVirtualDTO } from '../interface/maquina-virtual.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { throws } from 'assert';

@Injectable()
export class MaquinaVirtualService {
    constructor(
        @InjectRepository(MaquinaVirtual) private repositorioMaquinaVirtual: Repository< MaquinaVirtual >, 
    ){}
    async crear(maquinaVirtualdto: MaquinaVirtualDTO): Promise< MaquinaVirtual > {
        let maquinaVirtual = this.repositorioMaquinaVirtual.create(maquinaVirtualdto);
        return this.repositorioMaquinaVirtual.save(maquinaVirtual);
    }
    async obtenerMaquinaVirtuales(): Promise < MaquinaVirtual[] > {
        return this.repositorioMaquinaVirtual.find();
    }
    async obtener(id:number): Promise < MaquinaVirtual|null > {
        return this.obtenerMaquinaVirtualPorCampo("id",`${id}`);
    }
    async update( maquinaVirtualDTO:MaquinaVirtualDTO ): Promise < MaquinaVirtual|null > {
        await this.repositorioMaquinaVirtual.update({id:maquinaVirtualDTO.id},maquinaVirtualDTO);
        return this.obtenerMaquinaVirtualPorCampo("id",`${maquinaVirtualDTO.id}`);
    }
    async delete( id:number ): Promise < MaquinaVirtual|null > {
        let maquinaVirtual = this.obtenerMaquinaVirtualPorCampo("id",`${id}`);
        return (await this.repositorioMaquinaVirtual.delete({id})).raw;
    }
    async obtenerMaquinaVirtualPorCampo(nombre: string, valor: string): Promise< MaquinaVirtual | null> {
        const campos = {
        [nombre]: valor,
        };

        const maquinaVirtual = await this.repositorioMaquinaVirtual.findOne(
        campos,
        //{ relations: relacionesMaquinaVirtual }
        );

        if (!maquinaVirtual) {
            throw new NotFoundException();
        }

        return maquinaVirtual;
    }

    


}
