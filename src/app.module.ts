import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  
  imports: [
    MongooseModule.forRoot('mongodb://localhost/crud_api_db'),
    UsersModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
