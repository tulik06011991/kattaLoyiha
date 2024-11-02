import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DATABASE_URL'), // URL formatidagi ma'lumot
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // Ishonch hosil qiling, bu faqat ishlab chiqish uchun
      }),
      inject: [ConfigService],
    }),
  ],
})
export class PostgresModule {}
