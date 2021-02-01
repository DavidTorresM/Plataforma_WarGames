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
import { PreguntaService } from '../service/pregunta.service';
import { Pregunta } from '../pregunta.entity';
import { PreguntaDTO } from '../interface/pregunta.interface';
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

@ApiTags('Pregunta')
@Controller('api/pregunta')
export class PreguntaController {

    constructor(
        private preguntaService: PreguntaService,
    ){}
    @Get()
    @ApiOperation({ summary: 'Obtener todas los preguntas' })
    async obtenerPreguntas(): Promise < Pregunta[] >{
        return this.preguntaService.obtenerPreguntas();
    }
    @Post()
    @ApiOperation({ summary: 'Crear un nuevo pregunta' })
    @ApiBody({ type: [PreguntaDTO] })
    @ApiCreatedResponse({ description: 'The record has been successfully created.'})
    @UseFilters(new TypeORMExceptionFilter()) 
    async crearPregunta(@Body() preguntaDTO: PreguntaDTO): Promise < Pregunta > {
        return this.preguntaService.crearPregunta(preguntaDTO);
    }
    @Patch()
    @ApiOperation({ summary: 'Actualizar pregunta existente' })
    @ApiNotFoundResponse({ description: 'Pregunta no encontrado en la API'  })
    @UseFilters(new TypeORMExceptionFilter()) 
    async updatePregunta(@Body() preguntaDTO: PreguntaDTO): Promise < Pregunta > {
        return this.preguntaService.updatePregunta(preguntaDTO);
    }
    @Delete()
    @ApiOperation({ summary: 'Delete pregunta' })
    @UseFilters(new TypeORMExceptionFilter()) 
    async deletePregunta(@Param('id') id: number): Promise < Pregunta > {
        return this.preguntaService.deletePregunta(id);
    }
    @Get('id/:id')
    @ApiOperation({ summary: 'Obtener pregunta por id' })
    @ApiParam({ name:'id',type:"number", description:"Id del pregunta" })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Pregunta no encontrado' })
    @UseFilters(new TypeORMExceptionFilter()) 
    async getPregunta(@Param('id') id: string): Promise < Pregunta > {
        return this.preguntaService.obtenerPreguntaPorCampo("id",id);
    }
}
