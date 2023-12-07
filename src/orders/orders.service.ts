import { Injectable } from '@nestjs/common';
import { PrismaService } from '../lib/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}
  async delete(id: number) {
    return await this.prisma.order.delete({ where: { id } });
  }
}
