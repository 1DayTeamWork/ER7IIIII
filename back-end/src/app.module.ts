import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/orm.config';
import { BrandsModule } from './modules/brands/brands.module';
import { CarsModule } from './modules/cars/cars.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    BrandsModule,
    CarsModule,
    AuthModule,
  ],
})
export class AppModule {}
