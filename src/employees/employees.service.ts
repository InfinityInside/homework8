import { Injectable } from '@nestjs/common';
import { PrismaService } from '../lib/prisma.service';
import { UpdateEmployeeDto } from './UpdateEmployeeDto';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}
  async update(id: number, body: UpdateEmployeeDto) {
    return await this.prisma.employee.update({
      where: { id },
      data: body,
    });
  }
}
