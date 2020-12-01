import { Document } from "mongoose";

import { SProjects } from "../../project/schemas/projects.model";
import { SState } from "../schemas/states.model";

export interface IBoards extends Document {

    title: string;
    project: SProjects;
    states: SState[];
    createdAt: Date;
    updatedAt: Date;

}