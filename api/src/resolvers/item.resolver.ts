import { Inject, Logger } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Item as ItemType } from 'src/database/models/item.entity';
import { InputOrderType } from 'src/database/models/order.entity';
import { ItemUseCase } from 'src/useCases/item.usecase';

@Resolver(() => ItemType)
export class ItemResolver {
  constructor(
    private readonly _itemUseCases: ItemUseCase,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Query(() => ItemType)
  async getItem(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<ItemType> {
    try {
      console.info('Getting item id:', id);
      return await this._itemUseCases.get(id);
    } catch (error) {
      this.logger.error(`Order Id: ${id}  -  ${error.message}`);
      throw error;
    }
  }

  @Query(() => [ItemType])
  async getItemsInOrder(order: InputOrderType): Promise<ItemType[]> {
    try {
      console.info('Getting items by Order id:', order);
      return await this._itemUseCases.getAllItemsByOrder(order);
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }
}
