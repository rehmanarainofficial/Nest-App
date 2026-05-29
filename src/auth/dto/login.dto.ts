import { Transform } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    IsStrongPassword,
    MinLength,
} from 'class-validator';

export class LoginDto {
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value.trim().toLowerCase())
    email!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @IsStrongPassword()
    password!: string;
}
