import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './schemas/course.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}
  create(createCourseDto: CreateCourseDto) {
    const createdCourse = new this.courseModel(createCourseDto);
    return createdCourse.save();
  }

  findAll() {
    return this.courseModel.find().exec();
  }

  findOne(id: number) {
    return this.courseModel.findById(id).exec();
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseModel.findByIdAndUpdate(id, updateCourseDto, { new: true }).exec();
  }

  remove(id: number) {
    return this.courseModel.findByIdAndDelete(id).exec();
  }
}
