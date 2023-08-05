import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusOrder } from 'src/database/enums.num';
import { Order } from 'src/database/models/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly _orderRepository: Repository<Order>,
  ) {}

  async get(id: number): Promise<Order> {
    try {
      return await this._orderRepository.findOne({
        where: { id },
      });
    } catch (error) {
      const message = `we had a problem getting order ${id} from the database: ${error}`;
      throw new InternalServerErrorException({ message });
    }
  }

  async getAllOrders(): Promise<Order[]> {
    try {
      return await this._orderRepository.find();
    } catch (error) {
      const message = `We had a problem getting all Orders from the database: ${error}`;
      throw new InternalServerErrorException({ message });
    }
  }

  async getOrdersByStatus(status: StatusOrder): Promise<Order[]> {
    try {
      return await this._orderRepository.find({
        where: { status: status },
      });
    } catch (error) {
      const message = `We had a problem getting order with status: ${status} from the database: ${error}`;
      throw new InternalServerErrorException({ message });
    }
  }
}
