import { IsOptional, IsString } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  first_name: string;
  @IsString()
  @IsOptional()
  last_name: string;
  @IsString()
  @IsOptional()
  middle_name: string;
  @IsString()
  @IsOptional()
  position: string;
}
