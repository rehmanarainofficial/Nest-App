import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './DTO/update-student.dto';
import { CreateStudentDto } from './DTO/create-student.dto';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService) {}
    @Get()
    getAllStudents() {
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    getStudentById(@Param('id') id: number) {
        return this.studentService.getStudentById(Number(id));
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto) {
        return this.studentService.createStudent(body);
    }

    @Put(':id')
    updateStudent(@Param('id') id: number, @Body() body: UpdateStudentDto) {
        return this.studentService.updateStudent(Number(id), body);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: number) {
        return this.studentService.deleteStudent(Number(id));
    }
}
