import { Document } from "mongoose";

export interface IStates extends Document {

    name: string;
    color: string;
    createdAt: Date;
    updatedAt: Date;

}
