import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

import { SProjects } from "../../project/schemas/projects.model";

@Schema({ timestamps: true, })
export class SBoards {

    @Prop({ required: true, type: String, trim: true, default: 'Add Board title' })
    title: string;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Projects', })
    project: SProjects;
}

export const BoardsSchema = SchemaFactory.createForClass(SBoards);