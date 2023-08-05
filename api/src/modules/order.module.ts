import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/database/models/order.entity';
import { OrderResolver } from 'src/resolvers/order.resolver';
import { OrderService } from 'src/services/order.service';
import { OrderUseCase } from 'src/useCases/order.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [OrderResolver, OrderService, OrderUseCase],
})
export class OrderModule {}
