import { Module } from '@nestjs/common';
import { AuthService } from './authorization.service';
import { AuthController } from './authorization.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthorizationModule {}
