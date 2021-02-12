import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ValidationPipe } from 'src/validation.pipe';
import { CreateOrderDto } from './dto';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post()
  @HttpCode(200)
  async create(@Body(new ValidationPipe()) data: CreateOrderDto) {
    this.ordersService.create({ ...data });
  }
}
