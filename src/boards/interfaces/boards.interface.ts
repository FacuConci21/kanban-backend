import { Document } from "mongoose";

import { SProjects } from "../../project/schemas/projects.model";

export interface IBoards extends Document {

    title: string;
    project: SProjects;

}