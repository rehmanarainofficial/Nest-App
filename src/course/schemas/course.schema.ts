import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {
    COURSE_DURATIONS,
    CourseDuration,
    CourseLevel,
} from '../interfaces/course.interface';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {
    @Prop({ required: true })
    name!: string;

    @Prop({
        required: true,
        enum: COURSE_DURATIONS,
        default: CourseDuration.ONE_MONTH,
    })
    duration!: number;

    @Prop({
        required: true,
        enum: Object.values(CourseLevel),
        default: CourseLevel.BEGINNER,
    })
    level!: string;

    @Prop({ required: true })
    price!: number;

}

export const CourseSchema = SchemaFactory.createForClass(Course);
