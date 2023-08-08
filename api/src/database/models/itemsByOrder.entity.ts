import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Order } from './order.entity';
import { Item } from './item.entity';

@Entity('items_order')
@ObjectType()
@Unique(['id'])
export class ItemsOrder {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Field(() => String)
  @Column({ type: 'varchar', name: 'id_order' })
  @ManyToOne(
    () => Order,
    order => order.itemsOrder,
  )
  idOrder: string;

  @Field(() => String)
  @Column({ type: 'varchar', name: 'id_item' })
  @ManyToOne(
    () => Item,
    item => item.itemsOrder,
  )
  idItem: string;
}
