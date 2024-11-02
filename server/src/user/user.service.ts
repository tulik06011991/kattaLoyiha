import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { RedisService } from '../redis.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly redisService: RedisService,
  ) {}

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.userRepository.create({ email, password: hashedPassword });
    return await this.userRepository.save(newUser);
  }

  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Token yoki session uchun Redisga saqlash mumkin
    const sessionId = `${user.id}:${new Date().getTime()}`; // Misol uchun, oddiy session ID
    await this.redisService.set(`session:${sessionId}`, user.id.toString(), 3600); // 1 soat


    return { sessionId };
  }
}
