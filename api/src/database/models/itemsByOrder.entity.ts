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

  @Field(() => Int)
  @Column({ type: 'smallint' })
  @ManyToOne(
    () => Order,
    order => order.itemsOrder,
  )
  idOrder: number;

  @Field(() => Int)
  @Column({ type: 'smallint' })
  @ManyToOne(
    () => Item,
    item => item.itemsOrder,
  )
  idItem: number;
}
