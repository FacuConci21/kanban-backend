import { Document } from "mongoose";

import { SProjects } from "../../project/schemas/projects.model";

export interface IUsers extends Document {
    email: string;
    password: string;
    fullName: string;
    paperBin: SProjects[];
    createdAt: Date;
    udatedAt: Date;
}
