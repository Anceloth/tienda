import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ItemsOrder } from './itemsByOrder.entity';

@Entity('items')
@ObjectType()
@Unique(['id'])
export class Item {
  @Field(() => String)
  @PrimaryColumn({unique: true})
  id!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 50, unique: true })
  sku!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 50 })
  title!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 250 })
  description!: string;

  @Field(() => String)
  @Column({ type: 'varchar', length: 50 })
  url: string;

  @Field(() => Number)
  @Column({ type: 'float' })
  price!: number;

  @Field(() => Int)
  @Column({ type: 'smallint' })
  quantity!: number;

  @Field(() => [ItemsOrder])
  @OneToMany(
    () => ItemsOrder,
    itemsOrder => itemsOrder.idItem,
    { eager: true },
  )
  itemsOrder: ItemsOrder[];
}
