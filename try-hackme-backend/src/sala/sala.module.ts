import { Module } from '@nestjs/common';
import { SalaController } from './controller/sala.controller';
import { SalaService } from './service/sala.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Sala } from './sala.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Sala]),
  ],
  controllers: [SalaController],
  providers: [SalaService]
})
export class SalaModule {}
