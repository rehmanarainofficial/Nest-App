import { Transform, Type } from 'class-transformer';
import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsStrongPassword,
    Max,
    Min,
} from 'class-validator';
import { Role } from '../../user/interfaces/user.interface';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase())
    email!: string;

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    password!: string;

    @Type(() => Number)
    @IsNumber()
    @Min(18)
    @Max(50)
    age!: number;

    @IsString()
    @IsNotEmpty()
    @IsEnum(Role)
    role!: string;
}
