import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/database/models/item.entity';
import { ItemsOrder } from 'src/database/models/itemsByOrder.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly _itemRepository: Repository<Item>,
    @InjectRepository(ItemsOrder)
    private readonly _itemsOrderRepository: Repository<ItemsOrder>,
  ) {}

  async get(id: number): Promise<Item> {
    try {
      return await this._itemRepository.findOne({
        where: { id },
      });
    } catch (error) {
      const message = `we had a problem getting Item id ${id} from to the database: ${error}`;
      throw new InternalServerErrorException({ message });
    }
  }

  async getItemsGroup(order: number): Promise<ItemsOrder[]> {
    try {
      return await this._itemsOrderRepository.find({
        where: { idOrder: order },
      });
    } catch (error) {
      const message = `we had a problem making the request to the database: ${error}`;
      throw new InternalServerErrorException({ message });
    }
  }

  async getAllItemsByOrder(idItems: string[]): Promise<Item[]> {
    try {
      return await this._itemRepository.find({
        where: { id: In(idItems) },
      });
    } catch (error) {
      const message = `we had a problem making the request to the database: ${error}`;
      throw new InternalServerErrorException({ message });
    }
  }
}
