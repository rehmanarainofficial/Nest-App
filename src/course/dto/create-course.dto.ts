import { COURSE_DURATIONS, CourseDuration, CourseLevel } from './../interfaces/course.interface';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  name!: string;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(6)
  @IsEnum(COURSE_DURATIONS)
  duration!:  number;

  @IsString()
  @IsEnum(CourseLevel)
  level!: string;

  @Type(() => Number)
  @IsNumber()
  price!: number;
}