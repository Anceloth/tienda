import { Injectable } from '@nestjs/common';
import { StatusOrder } from 'src/database/enums.num';
import { Order } from 'src/database/models/order.entity';
import { OrderService } from 'src/services/order.service';

@Injectable()
export class OrderUseCase {
  constructor(private readonly _orderService: OrderService) {}

  async get(id: number): Promise<Order> {
    return await this._orderService.get(id);
  }

  async getOrderList(status: StatusOrder): Promise<Order[]> {
    const orders: Order[] = status
      ? await this._orderService.getAllOrders()
      : await this._orderService.getOrdersByStatus(status);

    return orders;
  }
}
