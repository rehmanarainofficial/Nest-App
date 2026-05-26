import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(userDto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({ email: userDto.email });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }
    return this.userModel.create({
      email: userDto.email,
      password: userDto.password,
      age: userDto.age,
      name: userDto.name,
    });
  }
}
