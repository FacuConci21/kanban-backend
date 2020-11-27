import { SUsers } from "../../users/schema/users.model";


export class CreateProjectDTO {
    name: string;
    description: string;
    creator: SUsers;
    members: SUsers[];
    cretedAt: Date;
    updatedAt: Date;
}