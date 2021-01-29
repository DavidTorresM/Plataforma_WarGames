import { Test, TestingModule } from '@nestjs/testing';
import { MarcadorController } from './marcador.controller';

describe('MarcadorController', () => {
  let controller: MarcadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarcadorController],
    }).compile();

    controller = module.get<MarcadorController>(MarcadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
