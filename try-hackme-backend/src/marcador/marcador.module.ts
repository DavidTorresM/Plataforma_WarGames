import { Module } from '@nestjs/common';
import { MarcadorController } from './controller/marcador.controller';
import { MarcadorService } from './service/marcador.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Marcador } from './marcador.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Marcador]),
  ],
  controllers: [MarcadorController],
  providers: [MarcadorService]
})
export class MarcadorModule {}
