import { Document } from "mongoose";

export interface IUsers extends Document {
    email: string;
    password: string;
    fullName: string;
    createdAt: Date;
    udatedAt: Date;
}
