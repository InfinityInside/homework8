import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './CreateProductDto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Post()
  async create(
    @Body()
    data: CreateProductDto,
  ) {
    return this.productsService.create(data);
  }
}
