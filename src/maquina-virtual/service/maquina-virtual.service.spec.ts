import { Test, TestingModule } from '@nestjs/testing';
import { MaquinaVirtualService } from './maquina-virtual.service';

describe('MaquinaVirtualService', () => {
  let service: MaquinaVirtualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaquinaVirtualService],
    }).compile();

    service = module.get<MaquinaVirtualService>(MaquinaVirtualService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
