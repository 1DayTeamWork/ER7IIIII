import { IsNotEmpty } from 'class-validator';

export class BrandDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  logo: string;
}
