import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandDto } from 'src/modules/brands/dto/brands.dto';
import { Brand } from 'src/common/models/brands.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand) private readonly brandRepo: Repository<Brand>,
  ) {}

  addBrand(body: BrandDto) {
    const newBrand = this.brandRepo.create(body);
    return this.brandRepo.save(newBrand);
  }

  getAll() {
    return this.brandRepo.find();
  }

  getOneBrand(id: string) {
    return this.brandRepo.findOne({ where: { id: id } });
  }

  updateBrand(id: string, body: BrandDto) {
    return this.brandRepo.update(id, body);
  }

  deleteBrand(id: string) {
    return this.brandRepo.delete(id);
  }
}
