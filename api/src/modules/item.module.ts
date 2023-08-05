import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/database/models/item.entity';
import { ItemsOrder } from 'src/database/models/itemsByOrder.entity';
import { ItemResolver } from 'src/resolvers/item.resolver';
import { ItemService } from 'src/services/item.service';
import { ItemUseCase } from 'src/useCases/item.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([Item, ItemsOrder])],
  providers: [ItemResolver, ItemService, ItemUseCase],
})
export class ItemModule {}
