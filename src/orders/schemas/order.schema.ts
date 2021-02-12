import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

// TODO: Transform it like Interface Order

@Schema()
export class Order {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
