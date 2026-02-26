import {
 Controller,
 Post,
 Get,
 Body,
 Req,
 UseGuards
} from '@nestjs/common';

import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { JwtGuard } from '../../common/guards/jwt.guard';

@Controller('devices')
export class DevicesController {

 constructor(
   private devicesService: DevicesService
 ) {}

 @UseGuards(JwtGuard)
 @Post()
 create(
   @Req() req,
   @Body() body: CreateDeviceDto
 ) {

   return this.devicesService.create(
     req.user.userId,
     body
   );

 }

 @UseGuards(JwtGuard)
 @Get()
 findAll(@Req() req) {

   return this.devicesService.findAll(
     req.user.userId
   );

 }

}