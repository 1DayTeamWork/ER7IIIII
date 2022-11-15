import { Car } from 'src/common/models/cars.entity';

export interface userInfoData {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;
  phoneNumber: number;
  role?: string;
  photo: string;
  cars?: Car;
}
