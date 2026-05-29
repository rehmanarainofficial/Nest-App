import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { Course, CourseSchema } from './schemas/course.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { RolesGuard } from '../auth/guards/roles.guard';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Course.name, schema: CourseSchema },
        ]),
        AuthModule,
        UserModule,
    ],
    controllers: [CourseController],
    providers: [CourseService, RolesGuard],
})
export class CourseModule {}
