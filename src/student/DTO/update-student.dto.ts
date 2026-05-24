import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateStudentDto {
    @IsOptional()
    @IsString()
    name!: string;

    @Transform(({ value }) => value?.toLowerCase())
    @IsOptional()
    @IsString()
    username!: string;

    @IsOptional()
    @IsNumber()
    age!: number;
}
