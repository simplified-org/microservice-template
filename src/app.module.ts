import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthModule } from 'meetings-app-lib';
import { appConfig } from './configs/app.config';
import { databaseConfig } from './configs/database.config';
import { rmqConfig } from './configs/rmq.config';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, rmqConfig],
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
    }),
    PrismaModule,
    AuthModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
})
export class AppModule {}
