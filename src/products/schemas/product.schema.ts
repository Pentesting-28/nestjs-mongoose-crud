import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocuemnt = HydratedDocument<Product>;

@Schema()
export class Product {

    @Prop()
    name: string

    @Prop()
    price: string

    @Prop()
    description: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);