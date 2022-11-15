import { IsDate, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsEmail()
  phoneNumber: number;

  @IsDate()
  date: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  photo: string;

  @IsNotEmpty()
  role: string;
}
