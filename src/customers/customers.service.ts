import { Injectable } from '@nestjs/common';
import { PrismaService } from '../lib/prisma.service';
@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}
  async getOrders(customerId: number) {
    const orders = await this.prisma.order.findMany({
      where: { customer_id: customerId },
    });
    let total = 0;
    for (const o of orders) {
      total += o.delivery_cost;
      const orderedProducts = await this.prisma.orderedProduct.findMany({
        where: { order_id: o.id },
      });
      for (const o of orderedProducts) {
        const price = await this.prisma.product.findUnique({
          where: { id: o.product_id },
          select: { price: true },
        });
        total += Object.values(price)[0] * o.amount;
      }
    }
    return { orders: orders, totalCost: total };
  }
}
