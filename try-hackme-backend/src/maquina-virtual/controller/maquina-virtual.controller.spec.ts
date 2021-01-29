import { Test, TestingModule } from '@nestjs/testing';
import { MaquinaVirtualController } from './maquina-virtual.controller';

describe('MaquinaVirtualController', () => {
  let controller: MaquinaVirtualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaquinaVirtualController],
    }).compile();

    controller = module.get<MaquinaVirtualController>(MaquinaVirtualController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
