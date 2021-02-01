import { Controller, 
    Get, 
    Post, 
    Body, 
    Patch, 
    Delete, 
    Param, 
    UseFilters,
    HttpException, 
    HttpStatus } from '@nestjs/common';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../usuario.entity';
import { UsuarioDTO } from '../interface/usuario.interface';
import { TypeORMExceptionFilter } from 'src/filters/Exceptions';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
    ApiParam,
    ApiOkResponse,
    ApiBody,
    ApiCreatedResponse,
    ApiNotFoundResponse,
  } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller('api/usuario')
export class UsuarioController {
    constructor(
        private usuarioService: UsuarioService,
    ){}
    @Get()
    @ApiOperation({ summary: 'Obtener todas los usuarios' })
    async obtenerUsuarios(): Promise < Usuario[] >{
        return this.usuarioService.obtenerUsuarios();
    }
    @Post()
    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    @ApiBody({ type: [UsuarioDTO] })
    @ApiCreatedResponse({ description: 'The record has been successfully created.'})
    @UseFilters(new TypeORMExceptionFilter()) 
    async crearUsuario(@Body() usuarioDTO: UsuarioDTO): Promise < Usuario > {
        return this.usuarioService.crearUsuario(usuarioDTO);
    }
    @Patch()
    @ApiOperation({ summary: 'Actualizar usuario existente' })
    @ApiNotFoundResponse({ description: 'Usuario no encontrado en la API'  })
    @UseFilters(new TypeORMExceptionFilter()) 
    async updateUsuario(@Body() usuarioDTO: UsuarioDTO): Promise < Usuario > {
        return this.usuarioService.updateUsuario(usuarioDTO);
    }
    @Delete()
    @ApiOperation({ summary: 'Delete usuario' })
    @UseFilters(new TypeORMExceptionFilter()) 
    async deleteUsuario(@Param('id') id: number): Promise < Usuario > {
        return this.usuarioService.deleteUsuario(id);
    }
    @Get('id/:id')
    @ApiOperation({ summary: 'Obtener usuario por id' })
    @ApiParam({ name:'id',type:"number", description:"Id del usuario" })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Usuario no encontrado' })
    @UseFilters(new TypeORMExceptionFilter()) 
    async getUsuario(@Param('id') id: string): Promise < Usuario > {
        return this.usuarioService.obtenerUsuarioPorCampo("id",id);
    }
}
