import { Document, } from "mongoose";

import { SUsers } from "../../users/schema/users.model";

export interface IProject extends Document {
    name: string;
    description: string;
    creator: SUsers;
    members: SUsers[];
    cretedAt: Date;
    updatedAt: Date;
}
