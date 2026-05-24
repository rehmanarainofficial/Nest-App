import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
    @IsString()
    name!: string;

    @Transform(({ value }) => value?.toLowerCase())
    @IsString()
    username!: string;

    @IsNumber()
    age!: number;
}
