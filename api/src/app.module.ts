import { Module } from '@nestjs/common';
import { EasyconfigModule, EasyconfigService } from 'nestjs-easyconfig';

import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { DatabaseModule } from './modules/database.module';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';
import GraphQLJSON from 'graphql-type-json';
import { OrderModule } from './modules/order.module';
import { ItemModule } from './modules/item.module';

@Module({
  imports: [
    EasyconfigModule.register({ path: './.env', safe: true }),
    WinstonModule.forRoot({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
          ),
        }),
      ],
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/database/types/schema.gql'),
      sortSchema: true,
      context: ({ req }) => ({ req }),
    }),
    DatabaseModule,
    OrderModule,
    ItemModule,
  ],
  providers: [],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly config: EasyconfigService) {
    AppModule.port = this.config.get('API_PORT');
  }
}
