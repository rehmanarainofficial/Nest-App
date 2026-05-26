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

  async findUser() {
    const users = await this.userModel.find();
    if (!users) {
      throw new ConflictException('No users found');
    }
    return users;
  }

  async findUserById(id: string) {
    let findUser = await this.userModel.findById(id);
    if (!findUser) {
      throw new ConflictException('No user found with this id');
    }
    return findUser;
  }

  async updateUser(id: string, userDto: CreateUserDto) {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, userDto, {
      new: true,
    });
    if (!updatedUser) {
      throw new ConflictException('No user found with this id');
    }
    return updatedUser;
  }

  async deleteUser(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new ConflictException('No user found with this id');
    }
    return deletedUser;
  }

  async deleteAllUsers() {
    const result = await this.userModel.deleteMany({});
    return result;
  }
}
