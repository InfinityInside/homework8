import { IsEnum, IsInt, IsNumber, IsString, Min } from 'class-validator';
import { Category } from '@prisma/client';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsEnum(Category)
  category: Category;
  @IsInt()
  @Min(0)
  amount: number;
  @IsNumber()
  @Min(0)
  price: number;
}
