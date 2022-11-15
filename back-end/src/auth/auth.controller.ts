import { Body, Controller, Post } from '@nestjs/common';
import { SignInCredentialsDto } from 'src/auth/dto/signIn.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  signinLocal(@Body() dto: SignInCredentialsDto) {
    return this.authService.signinLocal(dto);
  }
}
