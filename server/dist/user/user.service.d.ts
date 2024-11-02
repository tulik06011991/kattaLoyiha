import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { RedisService } from '../redis.service';
export declare class UserService {
    private readonly userRepository;
    private readonly redisService;
    constructor(userRepository: Repository<User>, redisService: RedisService);
    register(email: string, password: string): Promise<User>;
    login(email: string, password: string): Promise<{
        sessionId: string;
    }>;
}
