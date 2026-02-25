import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from '../../common/guards/jwt.guard'; // ✅ เพิ่มบรรทัดนี้

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: "supersecret",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  providers: [AuthService, JwtGuard], // ✅ เพิ่ม JwtGuard ตรงนี้
  controllers: [AuthController],
})
export class AuthModule {}