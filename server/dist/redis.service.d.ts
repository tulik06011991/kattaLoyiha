import Redis from 'ioredis';
export declare class RedisService {
    private readonly redisClient;
    constructor(redisClient: Redis);
    set(key: string, value: any): Promise<void>;
    get(key: string): Promise<any>;
}
