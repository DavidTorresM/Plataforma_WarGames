import { Injectable } from '@nestjs/common';
import { Categoria } from '../categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { CategoriaDTO } from '../interface/categoria.interface';

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria) private repositorioCategoria: Repository< Categoria >,
    ){}
    
    async delete(id: number): Promise< Categoria > {
        return (await this.repositorioCategoria.delete({id})).raw;
    }

    async obtenerCategorias(): Promise < Categoria[] >{
        return await this.repositorioCategoria.find();
    }
    
    async crear( categoria: CategoriaDTO ): Promise< Categoria > {
        const categoriaModel = this.repositorioCategoria.create(categoria);
        return this.repositorioCategoria.save(categoriaModel);
    }


    async update( categoria: CategoriaDTO ): Promise< Categoria > {
        return (await this.repositorioCategoria.update({ id: categoria.id },categoria)).raw;
    }

    async obtenerItemPorCampo(nombre: string, valor: string): Promise< Categoria | null> {
        const campos = {
        [nombre]: valor,
        };

        const categoria = await this.repositorioCategoria.findOne(
        campos,
        //{ relations: relacionesUsuario }
        );

        if (!categoria) {
        return null;
        }

        return categoria;
    }
}
