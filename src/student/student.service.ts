import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './Interfaces/student.Student';
import { UpdateStudentDto } from './DTO/update-student.dto';
import { CreateStudentDto } from './DTO/create-student.dto';

@Injectable()
export class StudentService {
  private students: Student[] = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
    { id: 3, name: 'Bob Johnson', age: 19 },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    let student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return student;
  }

  createStudent(CreateStudentDto: CreateStudentDto): Student {
    const newStudent = {
      id: this.students.length + 1,
      ...CreateStudentDto,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: number, UpdateStudentDto: UpdateStudentDto): Student {
    let student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    student.name = UpdateStudentDto.name;
    student.age = UpdateStudentDto.age;
    return student;
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    this.students.splice(index, 1);
    return { message: `Student with id ${id} deleted successfully` };
  }
}
