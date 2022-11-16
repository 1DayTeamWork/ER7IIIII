import { UserDto } from 'src/modules/users/dto/users.dto';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from './cars.entity';

@Entity('users')
export class User {
  constructor(entity: UserDto) {
    Object.assign(this, entity);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  fullName: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 80, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  role: string;

  @Column({ type: 'varchar', nullable: true })
  photo: string;

  @OneToMany(() => Car, (cars) => cars.owner)
  cars: Car;
}
