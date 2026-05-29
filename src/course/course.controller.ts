import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Roles } from './decorators/roles.decorator';
import { Role } from '../user/interfaces/user.interface';
import { AuthGuard } from '../auth/guards/auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Roles(Role.ADMIN)
    @UseGuards(AuthGuard, RolesGuard)
    @Post()
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto);
    }

    @Get()
    findAll() {
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.courseService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
        return this.courseService.update(+id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.courseService.remove(+id);
    }
}
