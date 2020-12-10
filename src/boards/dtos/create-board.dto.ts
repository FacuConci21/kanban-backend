import { SProjects } from "../../project/schemas/projects.model";
import { SState } from "../schemas/states.model";

export class CreateBoardDTO {

    title: string;
    project: SProjects;
    states: SState[];
    createdAt: Date;
    updatedAt: Date;
    
}