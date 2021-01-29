import { Module } from '@nestjs/common';
import { PreguntaController } from './controller/pregunta.controller';
import { PreguntaService } from './service/pregunta.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Pregunta } from './pregunta.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Pregunta]),
  ],
  controllers: [PreguntaController],
  providers: [PreguntaService]
})
export class PreguntaModule {}
