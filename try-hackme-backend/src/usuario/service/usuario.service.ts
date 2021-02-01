import { Injectable,HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { Usuario } from '../usuario.entity';
import { UsuarioDTO } from '../interface/usuario.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { throws } from 'assert';

@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario) private repositorioUsuario: Repository< Usuario >, 
    ){}
    async crearUsuario(usuariodto: UsuarioDTO): Promise< Usuario > {
        let usuario = this.repositorioUsuario.create(usuariodto);
        return this.repositorioUsuario.save(usuario);
    }
    async obtenerUsuarios(): Promise < Usuario[] > {
        return this.repositorioUsuario.find();
    }
    async obtenerUsuario(id:number): Promise < Usuario|null > {
        return this.obtenerUsuarioPorCampo("id",`${id}`);
    }
    async updateUsuario( usuarioDTO:UsuarioDTO ): Promise < Usuario|null > {
        await this.repositorioUsuario.update({id:usuarioDTO.id},usuarioDTO);
        return this.obtenerUsuarioPorCampo("id",`${usuarioDTO.id}`);
    }
    async deleteUsuario( id:number ): Promise < Usuario|null > {
        let usuario = this.obtenerUsuarioPorCampo("id",`${id}`);
        return (await this.repositorioUsuario.delete({id})).raw;
    }
    async obtenerUsuarioPorCampo(nombre: string, valor: string): Promise< Usuario | null> {
        const campos = {
        [nombre]: valor,
        };

        const usuario = await this.repositorioUsuario.findOne(
        campos,
        //{ relations: relacionesUsuario }
        );

        if (!usuario) {
            throw new NotFoundException();
        }

        return usuario;
    }

    


}
