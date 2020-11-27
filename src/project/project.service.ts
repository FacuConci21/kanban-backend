import { Injectable, } from '@nestjs/common';
import { Model, NativeError, } from "mongoose";
import { InjectModel, } from "@nestjs/mongoose";

import { CreateProjectDTO, } from "./dtos/create-project.dto";
import { IProject, } from "./interfaces/project.interface";

@Injectable()
export class ProjectService {

    constructor(@InjectModel('Projects') private projectModel: Model<IProject>) {}

    async findAll(fill: any = {}): Promise<IProject[]> {
        return await this.projectModel.find(fill, null, { sort: 'createdAt' });
    }

    async findOne(_id: string): Promise<IProject> {
        return await this.projectModel.findById(_id);
    }

    async createOne(projectDTO: CreateProjectDTO): Promise<IProject> {
        const newProject = new this.projectModel(projectDTO);
        return await newProject.save();
    }

    async updateOne(_id: string, projectDTO: CreateProjectDTO): Promise<IProject> {
        return await this.projectModel.findByIdAndUpdate(_id, projectDTO, { new: true });

    }

    async deleteOne(_id: string): Promise<IProject> {
        return await this.projectModel.findByIdAndDelete(_id);
    }

}
