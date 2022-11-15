import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encodedPassword } from 'src/common/utils/bcrypt';
import { Repository } from 'typeorm';
import { User } from '../../common/models/users.entity';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  addUser(body: Partial<User>) {
    body.password = encodedPassword(body.password);
    const newUser = this.userRepo.create(body);
    return this.userRepo.save(newUser);
  }

  getAll() {
    return this.userRepo.find();
  }

  getOneUser(id: string) {
    return this.userRepo.findOne({ where: { id: id } });
  }

  updateUser(id: string, body: UserDto) {
    return this.userRepo.update(id, body);
  }

  deleteUser(id: string) {
    return this.userRepo.delete(id);
  }
}
