import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { MaquinaVirtualService } from '../service/maquina-virtual.service';
import { MaquinaVirtualDTO } from '../interface/maquina-virtual.interface';
import { MaquinaVirtual } from '../MaquinaVirtual.entity';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
    ApiParam,
    ApiOkResponse,
  } from '@nestjs/swagger';

@ApiTags('MaquinaVirtual')
@Controller('api/maquina-virtual')
export class MaquinaVirtualController {

    constructor(
        private MaquinaVirtualService:MaquinaVirtualService,
    ){}
    @Get()
    @ApiOperation({ summary: 'Obtener todas las maquinas virtuales' })
    async obtenerMaquinaVirtuals(): Promise< MaquinaVirtual[] > {
        return this.MaquinaVirtualService.obtenerMaquinaVirtuales();
    }
    @Post()
    @ApiOperation({ summary: 'Crear una nueva MaquinaVirtual' })
    async crearMaquinaVirtual(@Body() MaquinaVirtualDTO: MaquinaVirtualDTO ): Promise< MaquinaVirtual >{
        return this.MaquinaVirtualService.crear(MaquinaVirtualDTO);
    }
    @Patch()
    @ApiOperation({ summary: 'Actualizar una MaquinaVirtual' })
    async updateMaquinaVirtual(@Body() MaquinaVirtualDTO: MaquinaVirtualDTO ): Promise< MaquinaVirtual >{
        return this.MaquinaVirtualService.update(MaquinaVirtualDTO);
    }
    @Delete(":id")
    @ApiOperation({ summary: 'Borrar una MaquinaVirtual' })
    @ApiParam({ name:'id',type:"number", description:"Id de la MaquinaVirtual" })
    @ApiResponse({ status: 200, description: 'MaquinaVirtual eliminada satisfactoriamente.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async deleteMaquinaVirtual(@Param('id') id:number): Promise< MaquinaVirtual > {
        return this.MaquinaVirtualService.delete(id);
    }
}
