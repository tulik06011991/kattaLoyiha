import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(body: {
        email: string;
        password: string;
    }): Promise<import("./entities/user.entity").User>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        sessionId: string;
    }>;
}
