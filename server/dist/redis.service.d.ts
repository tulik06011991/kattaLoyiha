import { Redis } from '@nestjs-modules/ioredis';
export declare class RedisService {
    private readonly redis;
    constructor(redis: Redis);
    get(key: string): Promise<string | null>;
    set(key: string, value: string): Promise<void>;
}
