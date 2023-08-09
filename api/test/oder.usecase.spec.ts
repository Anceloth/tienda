import { Test, TestingModule } from '@nestjs/testing';
import { OrderUseCase } from '../src/useCases/order.usecase';

describe('OrderUseCase', () => {
  let orderuseCase: OrderUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderUseCase],
    }).compile();

    orderuseCase = module.get<OrderUseCase>(OrderUseCase);
  });

  it('should be defined', () => {
    expect(orderuseCase).toBeDefined();
  });
});
