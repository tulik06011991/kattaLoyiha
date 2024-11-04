import { Test, TestingModule } from '@nestjs/testing';
import { AuthController} from './authorization.controller';
import { AuthService} from './authorization.service';

describe('AuthorizationController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
