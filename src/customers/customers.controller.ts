import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerExistsPipe, OrdersExistPipe } from '../lib/ValidationPipes';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Get(':id/orders')
  async getOrders(
    @Param('id', ParseIntPipe, CustomerExistsPipe, OrdersExistPipe)
    customerId: number,
  ) {
    return this.customersService.getOrders(customerId);
  }
}
