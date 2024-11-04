// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis.module';
import { PostgresModule } from './postgres.module';

import { AuthorizationModule } from './authorization/authorization.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RedisModule,
    PostgresModule,
    
    AuthorizationModule,
  ],
})
export class AppModule {}
