import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { User } from '../user/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
        @InjectModel(User.name) private userModel: Model<User>,
    ) {}
    async register(userDto: CreateUserDto) {
        let hashPassword = await bcrypt.hash(userDto.password, 12);
        let userCreate = await this.userService.createUser({
            ...userDto,
            password: hashPassword,
        });

        return { user: userCreate };
    }

    async login(loginDto: LoginDto) {
        let user = await this.userModel.findOne({ email: loginDto.email });
        if (!user) {
            throw new NotFoundException('User not found');
        }

        let isMatch = await bcrypt.compare(loginDto.password, user.password);
        if (!isMatch) {
            throw new NotFoundException('Invalid credentials');
        }

        let token = await this.jwtService.signAsync({ id: user._id, role: user.role });
        return { user, token };
    }

    async getProfile(userId: string) {
        let user = await this.userModel.findById(userId);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
}
