import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  name!: string;

  @IsOptional()
  @IsNumber()
  age!: number;
}
