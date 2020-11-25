import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { CreateUserDTO } from "./dto/create-user.dto";
import { IUsers } from "./interfaces/users.interface";

@Injectable()
export class UsersService {

    constructor(@InjectModel('Users') private userMode: Model<IUsers>) {}

    findAll() {}

    findOne() {}

    createOne() {}

    updateOne() {}

    deleteOne() {}
    
}
