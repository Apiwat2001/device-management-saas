import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class DevicesService {

  constructor(
    private prisma: PrismaService
  ) {}

  async create(userId: string, data: CreateDeviceDto) {
    try {
      return await this.prisma.device.create({
        data: {
          name: data.name,
          serialNumber: data.serialNumber,
          ownerId: userId,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new BadRequestException('Serial number already exists');
      }

      throw error;
    }
  }

  async findAll(userId: string) {
    return this.prisma.device.findMany({
      where: {
        ownerId: userId,
      },
    });
  }

  async remove(id: string, userId: string) {

  return this.prisma.device.delete({
    where: {
      id: id,
      ownerId: userId
    }
  });

}

async findOne(id: string, userId: string) {

  return this.prisma.device.findFirst({
    where: {
      id: id,
      ownerId: userId
    }
  });

}

async update(
  id: string,
  userId: string,
  data: CreateDeviceDto
) {

  return this.prisma.device.update({
    where: {
      id: id
    },
    data: {
      name: data.name,
      serialNumber: data.serialNumber
    }
  });

}

}