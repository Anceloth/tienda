import { Injectable } from '@nestjs/common';
import { Item } from 'src/database/models/item.entity';
import { InputOrderType } from 'src/database/models/order.entity';
import { ItemService } from 'src/services/item.service';
import { OrderService } from 'src/services/order.service';

@Injectable()
export class ItemUseCase {
  constructor(private readonly _itemService: ItemService) {}

  async get(id: number): Promise<Item> {
    return await this._itemService.get(id);
  }

  async getAllItemsByOrder(order: string): Promise<Item[]> {

    const orderItems = await this._itemService.getItemsGroup(order);
    const itemListFromOrder = orderItems.map(
      itemOrder => itemOrder.idItem,
    );
    return await this._itemService.getAllItemsByOrder(itemListFromOrder);
  }
}
