import { Injectable } from '@nestjs/common';
import { PrismaService } from '../lib/prisma.service';
import { CreateProductDto } from './CreateProductDto';
@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateProductDto) {
    try {
      return await this.prisma.product.create({ data });
    } catch (e) {
      throw e;
    }
  }
}
