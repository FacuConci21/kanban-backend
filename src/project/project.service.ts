import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { CreateProjectDTO } from "./dtos/create-project.dto";
import { IProject } from "./interfaces/project.interface";

@Injectable()
export class ProjectService {

    constructor(@InjectModel('Projects') private productModel: Model<IProject>) {}

    
}
