import { ApiProperty } from "@nestjs/swagger";

export class SalaDTO {
    @ApiProperty({required:false})
    id: number;
  
}
