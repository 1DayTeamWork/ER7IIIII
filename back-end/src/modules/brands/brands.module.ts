import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { Brand } from 'src/common/models/brands.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  providers: [BrandsService],
  controllers: [BrandsController],
})
export class BrandsModule {}
