import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm';
import { PoemasModule } from './poemas/poemas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    PoemasModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      installSubscriptionHandlers: true
    })
  ],
})
export class AppModule {}
