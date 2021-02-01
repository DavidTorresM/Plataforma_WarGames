import { ApiProperty } from '@nestjs/swagger';
export class UsuarioDTO {
    @ApiProperty({required:false, type:Number})
    id?: number;
    @ApiProperty()
    email: string;
    @ApiProperty()
    nick:string;
}
