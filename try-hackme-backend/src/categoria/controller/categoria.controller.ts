import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaDTO } from '../interface/categoria.interface';
import { Categoria } from '../categoria.entity';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
    ApiParam,
    ApiOkResponse,
  } from '@nestjs/swagger';

@ApiTags('Categoria')
@Controller('api/categoria')
export class CategoriaController {
    constructor(
        private categoriaService:CategoriaService,
    ){}
    @Get()
    @ApiOperation({ summary: 'Obtener todas las categorias' })
    async obtenerCategorias(): Promise< Categoria[] > {
        return this.categoriaService.obtenerCategorias();
    }
    @Post()
    @ApiOperation({ summary: 'Crear una nueva categoria' })
    async crearCategoria(@Body() categoriaDTO: CategoriaDTO ): Promise< Categoria >{
        return this.categoriaService.crear(categoriaDTO);
    }
    @Patch()
    @ApiOperation({ summary: 'Actualizar una categoria' })
    async updateCategoria(@Body() categoriaDTO: CategoriaDTO ): Promise< Categoria >{
        return this.categoriaService.update(categoriaDTO);
    }
    @Delete(":id")
    @ApiOperation({ summary: 'Borrar una categoria' })
    @ApiParam({ name:'id',type:"number", description:"Id de la categoria" })
    @ApiResponse({ status: 200, description: 'Categoria eliminada satisfactoriamente.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async deleteCategoria(@Param('id') id:number): Promise< Categoria > {
        return this.categoriaService.delete(id);
    }
}
