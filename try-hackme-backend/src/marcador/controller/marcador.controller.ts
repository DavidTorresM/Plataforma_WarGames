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
import { MarcadorService } from '../service/marcador.service';
import { Marcador } from '../marcador.entity';
import { MarcadorDTO } from '../interface/marcador.interface';
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

@ApiTags('Marcador')
@Controller('api/marcador')
export class MarcadorController {
    constructor(
        private marcadorService: MarcadorService,
    ){}
    @Get()
    @ApiOperation({ summary: 'Obtener todas los marcadors' })
    async obtenerMarcadors(): Promise < Marcador[] >{
        return this.marcadorService.obtenerMarcadors();
    }
    @Post()
    @ApiOperation({ summary: 'Crear un nuevo marcador' })
    @ApiBody({ type: [MarcadorDTO] })
    @ApiCreatedResponse({ description: 'The record has been successfully created.'})
    @UseFilters(new TypeORMExceptionFilter()) 
    async crearMarcador(@Body() marcadorDTO: MarcadorDTO): Promise < Marcador > {
        return this.marcadorService.crearMarcador(marcadorDTO);
    }
    @Patch()
    @ApiOperation({ summary: 'Actualizar marcador existente' })
    @ApiNotFoundResponse({ description: 'Marcador no encontrado en la API'  })
    @UseFilters(new TypeORMExceptionFilter()) 
    async updateMarcador(@Body() marcadorDTO: MarcadorDTO): Promise < Marcador > {
        return this.marcadorService.updateMarcador(marcadorDTO);
    }
    @Delete()
    @ApiOperation({ summary: 'Delete marcador' })
    @UseFilters(new TypeORMExceptionFilter()) 
    async deleteMarcador(@Param('id') id: number): Promise < Marcador > {
        return this.marcadorService.deleteMarcador(id);
    }
    @Get('id/:id')
    @ApiOperation({ summary: 'Obtener marcador por id' })
    @ApiParam({ name:'id',type:"number", description:"Id del marcador" })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Marcador no encontrado' })
    @UseFilters(new TypeORMExceptionFilter()) 
    async getMarcador(@Param('id') id: string): Promise < Marcador > {
        return this.marcadorService.obtenerMarcadorPorCampo("id",id);
    }
}
