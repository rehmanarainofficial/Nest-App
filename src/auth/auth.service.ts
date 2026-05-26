import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  async register(userDto: CreateUserDto) {
    let hashPassword = await bcrypt.hash(userDto.password, 12);
    let userCreate = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });

    let token = await this.jwtService.signAsync({ id: userCreate._id });
    return { user: userCreate, token };
  }
}
