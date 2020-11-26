import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { CreateUserDTO } from "./dto/create-user.dto";
import { IUsers } from "./interfaces/users.interface";

@Injectable()
export class UsersService {

    constructor(@InjectModel('Users') private userModel: Model<IUsers>) {}

    async findAll(): Promise<IUsers[]> {
        return await this.userModel.find();
    }

    async findOne(email: string): Promise<IUsers> {
        return await this.userModel.findOne({ email });
    }

    async createOne(userDTO: CreateUserDTO) {
        const newUser = new this.userModel(userDTO);
        return await newUser.save();
    }

    async updateOne(_id: string, userDTO: CreateUserDTO): Promise<IUsers> {
        return await this.userModel.findByIdAndUpdate(_id, userDTO, { new: true, });
    }

    async deleteOne(_id: string): Promise<IUsers> {
        return await this.userModel.findByIdAndDelete(_id);
    }

}
