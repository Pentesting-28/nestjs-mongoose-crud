import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true, unique: true, lowercase: true })
    email: string

    @Prop()
    password: string

    @Prop({ default: Date.now() })
    created_date: Date
}

export const UserSchema = SchemaFactory.createForClass(User);