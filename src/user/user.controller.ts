import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../auth/dto/create-user.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find')
  findUser() {
    return this.userService.findUser();
  }
  
  @UseGuards(AuthGuard)
  @Get('find/:id')
  findUserById(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Put('update/:id')
  updateUser(@Param('id') id: string, @Body() userDto: CreateUserDto) {
    return this.userService.updateUser(id, userDto);
  }

  @Delete('delete/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Delete('delete-all')
  deleteAllUsers() {
    return this.userService.deleteAllUsers();
  }
}
