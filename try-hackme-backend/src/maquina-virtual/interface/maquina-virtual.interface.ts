import { ApiProperty } from '@nestjs/swagger';

export class MaquinaVirtualDTO {
  @ApiProperty({required:false})
  id: number;

  @ApiProperty()
  ip: string;

  @ApiProperty()
  url: string;
}
