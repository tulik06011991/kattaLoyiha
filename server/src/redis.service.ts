// src/redis/redis.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRedis, Redis } from '@nestjs-modules/ioredis';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async get(key: string): Promise<string | null> {
    return await this.redis.get(key);
  }

  async set(key: string, value: string): Promise<void> {
    await this.redis.set(key, value);
  }
}
