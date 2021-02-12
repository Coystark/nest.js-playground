import { IsString, ValidateNested, IsInt } from 'class-validator';

export class User {
  @IsString()
  name: string;

  @IsString()
  phoneNumber: string;
}

export class CreateOrderDto {
  @ValidateNested()
  user: User;

  @IsString()
  location: string;

  @IsInt()
  latitude: number;

  @IsInt()
  longitude: number;

  @IsString()
  product: string;
}
