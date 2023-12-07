import { Injectable, PipeTransform } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { NotFoundException } from './exceptions';

@Injectable()
export class EntityExistsPipe implements PipeTransform {
  constructor(
    private readonly entityName: string,
    private readonly prisma: PrismaService,
  ) {}

  async transform(id: number) {
    const entity = await this.prisma[this.entityName].findUnique({
      where: { id },
    });
    if (!entity) throw new NotFoundException(this.entityName);
    return id;
  }
}

@Injectable()
export class CustomerExistsPipe extends EntityExistsPipe {
  constructor(private readonly prisma1: PrismaService) {
    super('customer', prisma1);
  }
}
@Injectable()
export class EmployeeExistsPipe extends EntityExistsPipe {
  constructor(private readonly prisma1: PrismaService) {
    super('employee', prisma1);
  }
}
@Injectable()
export class OrderExistsPipe extends EntityExistsPipe {
  constructor(private readonly prisma1: PrismaService) {
    super('order', prisma1);
  }
}
@Injectable()
export class OrdersExistPipe implements PipeTransform {
  constructor(private readonly prisma: PrismaService) {}
  async transform(id: number) {
    const orders = await this.prisma.order.findMany({
      where: { id },
    });
    if (!orders.length) return new NotFoundException('Orders from customer');
    return id;
  }
}
