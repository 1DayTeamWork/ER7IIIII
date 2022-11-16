import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from 'src/modules/users/dto/users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  // @UseGuards(AuthGuard('jwtAdmin'))
  @Post()
  addUser(@Body() body: UserDto) {
    this.service.addUser(body);
  }
  // @UseGuards(AuthGuard('jwtAdmin'))
  @Get()
  getAll() {
    return this.service.getAll();
  }

  @UseGuards(AuthGuard('jwtAdmin'))
  @Get('/:id')
  getOneUser(@Param('id') id: string) {
    return this.service.getOneUser(id);
  }

  // @UseGuards(AuthGuard('jwtAdmin'))
  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: UserDto) {
    return this.service.updateUser(id, body);
  }

  // @UseGuards(AuthGuard('jwtAdmin'))
  @Delete('/:id')
  deleteBrand(@Param('id') id: string) {
    return this.service.deleteUser(id);
  }
}
