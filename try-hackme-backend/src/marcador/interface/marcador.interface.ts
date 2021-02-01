import { ApiProperty } from "@nestjs/swagger";

export class MarcadorDTO {

    @ApiProperty({required:false})
    id: number;
  
    @ApiProperty()
    horaEntrada: Date;
  
    @ApiProperty()
    puntos?: number;
  
  
    @ApiProperty()
    voto?: number;
    
    @ApiProperty()
    idSala: number;
  
    @ApiProperty()
    idUsuario: number;
}
