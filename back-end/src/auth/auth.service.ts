import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { SignInCredentialsDto } from 'src/auth/dto/signIn.dto';
import { User } from 'src/common/models/users.entity';
import { comparePassword } from 'src/common/utils/bcrypt';
import { Repository } from 'typeorm';

// eslint-disable-next-line

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signinLocal(dto: SignInCredentialsDto) {
    const user = await this.userRepo.findOne({ where: { email: dto.email } }); // retrieve user
    if (!user) throw new UnauthorizedException('User unfound');
    const matched = comparePassword(dto.password, user.password);
    if (!matched) throw new UnauthorizedException('incorrect password');
    return this.signUser(user.id, user.email, user.role);
  }

  signUser(userId: string, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      type: type,
    });
  }
}
