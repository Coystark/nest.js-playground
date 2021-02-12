import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    OrdersModule,
    MongooseModule.forRoot(
      'mongodb://root:example@mongo:27017/nest?authSource=admin',
    ),
  ],
})
export class AppModule {}
