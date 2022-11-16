import { BrandDto } from 'src/modules/brands/dto/brands.dto';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './cars.entity';

@Entity('brands')
export class Brand {
  constructor(entity: BrandDto) {
    Object.assign(this, entity);
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  logo: string;

  @OneToMany(() => Car, (cars) => cars.brand)
  cars: Car;
}
