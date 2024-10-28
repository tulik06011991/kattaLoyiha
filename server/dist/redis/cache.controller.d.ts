import { RedisService } from './redis.service';
export declare class CacheController {
    private readonly redisService;
    constructor(redisService: RedisService);
    setCache(body: {
        key: string;
        value: string;
    }): Promise<{
        message: string;
    }>;
    getCache(key: string): Promise<{
        key: string;
        value: any;
    }>;
}
