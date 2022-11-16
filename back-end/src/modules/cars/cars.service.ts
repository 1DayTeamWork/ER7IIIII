import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarDto } from 'src/modules/cars/dto/cars.dto';
import { Car } from 'src/common/models/cars.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private readonly carRepo: Repository<Car>,
  ) {}

  addCar(body: CarDto) {
    return this.carRepo.save(new Car(body));
  }

  getAll() {
    return this.carRepo.find();
  }

  getAllById(id: any) {
    return this.carRepo.find({
      where: {
        owner: id,
      },
      loadRelationIds: true,
    });
  }

  getOneCar(id: string) {
    return this.carRepo.findOne({ where: { id: id } });
  }

  updateCar(id: string, body: Partial<CarDto>) {
    return this.carRepo.update(id, body);
  }

  deleteCar(id: string) {
    return this.carRepo.delete(id);
  }
}
