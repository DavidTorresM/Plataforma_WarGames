import { ApiProperty } from "@nestjs/swagger";

export class PreguntaDTO {
    @ApiProperty({required:false})
    id: number;
  
    @ApiProperty()
    titulo: string;
  
    @ApiProperty()
    texto: string;
  
    @ApiProperty()
    respuesta?: string;
  
    @ApiProperty()
    respuestaHidden: string;

    @ApiProperty()
    hint?: string;

  
    @ApiProperty()
    idSala: number;
}
