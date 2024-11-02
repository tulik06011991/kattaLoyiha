import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private client: RedisClientType;

  async onModuleInit() {
    this.client = createClient({
      password: process.env.REDIS_PASSWORD, // Enviroment variable orqali parol
      socket: {
        host: process.env.REDIS_HOST, // Enviroment variable orqali host
        port: parseInt(process.env.REDIS_PORT, 10), // Enviroment variable orqali port
      },
    });

    // Redisga ulanish
    this.client.on('error', (err) => console.error('Redis Client Error', err));
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.quit();
  }

  async set(key: string, value: string, expirationInSeconds?: number) {
    if (expirationInSeconds) {
      await this.client.set(key, value, {
        EX: expirationInSeconds,
      });
    } else {
      await this.client.set(key, value);
    }
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async del(key: string): Promise<number> {
    return await this.client.del(key);
  }
}
