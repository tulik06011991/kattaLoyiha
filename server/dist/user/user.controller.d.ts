import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(body: {
        email: string;
        password: string;
    }): Promise<any>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        sessionId: string;
    }>;
}
