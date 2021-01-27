import { Module } from '@nestjs/common';
import { MaquinaVirtualController } from './controller/maquina-virtual.controller';
import { MaquinaVirtualService } from './service/maquina-virtual.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MaquinaVirtual } from './MaquinaVirtual.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([MaquinaVirtual]),
  ],
  controllers: [MaquinaVirtualController],
  providers: [MaquinaVirtualService]
})
export class MaquinaVirtualModule {}
