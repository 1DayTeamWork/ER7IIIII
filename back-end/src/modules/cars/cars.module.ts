import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car } from 'src/common/models/cars.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
