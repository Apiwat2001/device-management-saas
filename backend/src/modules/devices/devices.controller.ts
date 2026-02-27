import {Controller,Post,Get,Body,Req,UseGuards,Delete, Param} from '@nestjs/common';

import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { JwtGuard } from '../../common/guards/jwt.guard';
import { Put } from '@nestjs/common';

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

@UseGuards(JwtGuard)
@Get(':id')
findOne(
  @Param('id') id: string,
  @Req() req
) {

  return this.devicesService.findOne(
    id,
    req.user.userId
  );

}

@UseGuards(JwtGuard)
@Delete(':id')
remove(
  @Param('id') id: string,
  @Req() req
) {

  return this.devicesService.remove(
    id,
    req.user.userId
  );

}

@UseGuards(JwtGuard)
@Put(':id')
update(
  @Param('id') id: string,
  @Req() req,
  @Body() body: CreateDeviceDto
) {

  return this.devicesService.update(
    id,
    req.user.userId,
    body
  );

}

}