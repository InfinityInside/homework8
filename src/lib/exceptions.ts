import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(elem: string) {
    super(`${elem} with such id not found`, HttpStatus.NOT_FOUND);
  }
}
export class InvalidCategoryException extends HttpException {
  constructor() {
    super(`Invalid product category`, HttpStatus.FORBIDDEN);
  }
}
