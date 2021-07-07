import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import UpdateProductInterface from '../entities/updateProduct.interface';

export default class UpdateReceiptDto {
  @IsNotEmpty()
  products?: UpdateProductInterface[];

  @IsNotEmpty()
  @IsString()
  user: string;

  @IsOptional()
  @IsString()
  misc?: string;
}
