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
import { CarDto } from 'src/modules/cars/dto/cars.dto';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly service: CarsService) {}

  // @UseGuards(AuthGuard('jwtAdmin'))
  @Post()
  addCar(@Body() body: CarDto) {
    return this.service.addCar(body);
  }

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get('allcars/:id')
  getAllById(@Param('id') id: string) {
    return this.service.getAllById(id);
  }

  @Get('/:id')
  getOneCar(@Param('id') id: string) {
    return this.service.getOneCar(id);
  }

  @Put('/:id')
  updateCar(@Param('id') id: string, @Body() body: CarDto) {
    return this.service.updateCar(id, body);
  }

  @Delete('/:id')
  deleteBrand(@Param('id') id: string) {
    return this.service.deleteCar(id);
  }
}
