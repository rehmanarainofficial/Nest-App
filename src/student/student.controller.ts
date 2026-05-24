import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService) {}
    @Get()
    getAllStudents() {
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    getStudentById(@Param('id') id: number) {
        return this.studentService.getStudentById(id);
    }

    @Post()
    createStudent(@Body() body: { name: string; age: number }) {
        return this.studentService.createStudent(body.name, body.age);
    }

    @Put(':id')
    updateStudent(@Param('id') id: number, @Body() body: { name: string; age: number }) {
        return this.studentService.updateStudent(id, body.name, body.age);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: number) {
        return this.studentService.deleteStudent(id);
    }
}
