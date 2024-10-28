// src/redis.module.ts
import { Module } from '@nestjs/common';
import { RedisModule as NestRedisModule } from '@nestjs-modules/ioredis';
import { RedisService } from './redis/redis.service';

@Module({
  imports: [
    NestRedisModule.forRoot({
      config: {
        host: 'your-redis-cloud-host', // Redis cloud host manzili
        port: your-redis-cloud-port,    // Redis cloud port raqami
        password: 'your-redis-password', // Redis parolingiz
      },
    }),
  ],
  providers: [RedisService],
  exports: [NestRedisModule, RedisService],
})
export class RedisModule {}
