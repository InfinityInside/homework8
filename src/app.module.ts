import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CustomersModule, EmployeesModule, ProductsModule, OrdersModule],
})
export class AppModule {}
