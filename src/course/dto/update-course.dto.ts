import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { COURSE_DURATIONS, CourseLevel } from '../interfaces/course.interface';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
    @IsString()
    name!: string;

    @Type(() => Number)
    @IsNumber()
    @Min(1)
    @Max(6)
    @IsEnum(COURSE_DURATIONS)
    duration!: number;

    @IsString()
    @IsEnum(CourseLevel)
    level!: string;

    @Type(() => Number)
    @IsNumber()
    price!: number;
}
