import { SProjects } from "../../project/schemas/projects.model";

export class CreateUserDTO {
    email: string;
    password: string;
    fullName: string;
    paperBin: SProjects[];
    createdAt: Date;
    udatedAt: Date;
}