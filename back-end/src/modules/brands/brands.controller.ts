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
import { BrandDto } from 'src/modules/brands/dto/brands.dto';
import { BrandsService } from './brands.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly service: BrandsService) {}

  // @UseGuards(AuthGuard('jwtAdmin'))
  @Post()
  addBrand(@Body() body: BrandDto) {
    return this.service.addBrand(body);
  }

  // @UseGuards(AuthGuard('jwtAdmin'))
  @Get()
  getAll() {
    return this.service.getAll();
  }

  // @UseGuards(AuthGuard('jwtAdmin'))
  @Get('/:id')
  getOneBrand(@Param('id') id: string) {
    return this.service.getOneBrand(id);
  }

  // @UseGuards(AuthGuard('jwtAdmin'))
  @Put('/:id')
  updateBrand(@Param('id') id: string, @Body() body: BrandDto) {
    return this.service.updateBrand(id, body);
  }

  // @UseGuards(AuthGuard('jwtAdmin'))
  @Delete('/:id')
  deleteBrand(@Param('id') id: string) {
    return this.service.deleteBrand(id);
  }
}
