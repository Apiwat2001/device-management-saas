import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // 👈 เพิ่มตรงนี้
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}