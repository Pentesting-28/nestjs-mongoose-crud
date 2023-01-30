import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>){}

  async newUser(createUserDto: CreateUserDto) {

    const saltOrRounds = 10;
    const { password } = createUserDto;
    
    const passwordTreatment = await bcrypt.hash(password, saltOrRounds);

    createUserDto = {...createUserDto, password:passwordTreatment};

    return await this.UserModel.create(createUserDto);
  }

  async getAllUsers() {
    return await this.UserModel.find({});
  }

  async getUserById(id: string) {
    return await this.UserModel.findById(id);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    await this.UserModel.findByIdAndUpdate(id, updateUserDto);
    return this.UserModel.findById(id);
  }

  async removeUser(id: string) {
    return await this.UserModel.findByIdAndRemove(id);
  }
}
