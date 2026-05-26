import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { UserService } from '../user/user.service';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async register(userDto: CreateUserDto) {
    let hashPassword = await bcrypt.hash(userDto.password, 12);

    return this.userService.createUser({
      ...userDto,
      password: hashPassword
    });
  }
}
