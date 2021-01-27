import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { MarcadorModule } from './marcador/marcador.module';
import { SalaModule } from './sala/sala.module';
import { PreguntaModule } from './pregunta/pregunta.module';
import { MaquinaVirtualModule } from './maquina-virtual/maquina-virtual.module';
import { CategoriaModule } from './categoria/categoria.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'thm',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsuarioModule, MarcadorModule, SalaModule, PreguntaModule, MaquinaVirtualModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
