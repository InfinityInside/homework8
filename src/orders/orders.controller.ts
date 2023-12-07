import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderExistsPipe } from '../lib/ValidationPipes';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe, OrderExistsPipe) id: number) {
    return this.orderService.delete(id);
  }
}
