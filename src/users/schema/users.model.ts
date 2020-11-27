import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

import { SProjects } from "../../project/schemas/projects.model";

@Schema({ timestamps: true })
export class SUsers {

    @Prop({ required: true, type: String, trim: true, match: /.+\@.+\..+/, })
    email: string;

    @Prop({ required: true, type: String, trim: true, minlength: 8, })
    password: string;

    @Prop({ type: String, trim: true, default: 'user'+ Date.now() })
    fullName: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Projects'}], })
    paperBin: SProjects[];
}

export const UsersSchema = SchemaFactory.createForClass(SUsers);