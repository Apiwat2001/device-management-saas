import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from '../../common/guards/jwt.guard';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: "supersecret",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  providers: [AuthService, JwtGuard],
  controllers: [AuthController],
  exports: [JwtModule, JwtGuard], 
})
export class AuthModule {}