import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeExistsPipe } from "../lib/ValidationPipes";
import { UpdateEmployeeDto } from "./UpdateEmployeeDto";

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe, EmployeeExistsPipe) id: number,
    @Body() data: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(id, data);
  }
}
