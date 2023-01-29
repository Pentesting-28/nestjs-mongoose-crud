import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { Model } from 'mongoose';
import { Product, ProductDocuemnt } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocuemnt>){}
  
  async newProduct(createProductDto: CreateProductDto) {
    return await this.productModel.create(createProductDto);
  }

  async getAllProducts() {
    return await this.productModel.find({});
  }

  async getProductById(id: string) {
    return await this.productModel.findById(id);
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    await this.productModel.findByIdAndUpdate(id, updateProductDto);
    return this.productModel.findById(id);
  }

  removeProduct(id: string) {
    return `This action removes a #${id} product`;
  }
}
