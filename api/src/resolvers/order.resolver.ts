import { Inject, Logger } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { StatusOrder } from 'src/database/enums.num';
import { Order as OrderType } from 'src/database/models/order.entity';
import { OrderUseCase } from 'src/useCases/order.usecase';

@Resolver(() => OrderType)
export class OrderResolver {
  constructor(
    private readonly _orderUseCases: OrderUseCase,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Query(() => String)
  sayHello(): string {
    return 'Welcome to graphql API!';
  }

  @Query(() => OrderType)
  async getOrder(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<OrderType> {
    try {
      console.info('Getting order id:', id);
      return await this._orderUseCases.get(id);
    } catch (error) {
      this.logger.error(`Order Id: ${id}  -  ${error.message}`);
      throw error;
    }
  }

  @Query(() => [OrderType])
  async getAllOrders(
    @Args('status') status?: StatusOrder,
  ): Promise<OrderType[]> {
    try {
      return await this._orderUseCases.getOrderList(status);
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }
}
