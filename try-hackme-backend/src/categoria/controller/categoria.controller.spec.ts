import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from '../service/categoria.service';

describe('CategoriaController', () => {
  let controller: CategoriaController;
  let categoriaService: CategoriaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaController],
    }).compile();
    controller = module.get<CategoriaController>(CategoriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('obtenerCategorias', () => {
    it('should return an array empty', async () => {
      const result = [];

      expect(await controller.obtenerCategorias()).toBe(result);
    });
  });




});
