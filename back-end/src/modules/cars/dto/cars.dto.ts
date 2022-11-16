import { IsDate, IsNotEmpty } from 'class-validator';

export class CarDto {
  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  brandName: string;

  @IsNotEmpty()
  serialNum: string;

}
