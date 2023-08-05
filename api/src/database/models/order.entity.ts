import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { StatusOrder } from '../enums.num';
import { Item } from './item.entity';
import { ItemsOrder } from './itemsByOrder.entity';

@Entity('orders')
@ObjectType()
@Unique(['id'])
export class Order {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Field()
  @CreateDateColumn({ type: 'timestamp', name: 'create_date' })
  createDate!: Date;

  @Field(() => StatusOrder)
  @Column({ type: 'enum', enum: StatusOrder, default: StatusOrder.APPROVED })
  status!: StatusOrder;

  @Field(() => String)
  @Column({ type: 'varchar', length: 50 })
  client!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 50 })
  name!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 250 })
  shippingAddress!: string;

  @Field()
  @Column({ type: 'timestamp', name: 'shipping_promise' })
  shippingPromise!: Date;

  @Field(() => [ItemsOrder])
  @OneToMany(
    () => ItemsOrder,
    itemsOrder => itemsOrder.idOrder,
    { eager: true },
  )
  itemsOrder: ItemsOrder[];
}

@InputType()
export class InputOrderType {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field()
  createDate!: Date;

  @Field(() => StatusOrder)
  status!: StatusOrder;

  @Field(() => [ItemsOrder])
  itemsOrder: ItemsOrder[];
}
