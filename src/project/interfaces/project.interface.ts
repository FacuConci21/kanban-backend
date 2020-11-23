import { Document, } from "mongoose";

export interface IProject extends Document {
    name: string;
    description: string;
    cretedAt: Date;
    updatedAt: Date;
}
