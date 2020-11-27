import { Prop, Schema, SchemaFactory, } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

import { SUsers } from "../../users/schema/users.model";

@Schema({ timestamps: true, })
export class SProjects {

    @Prop({ required: true, type: String, })
    name: string;

    @Prop({ type: String})
    description: string;

    @Prop({ required:true, type: mongoose.Schema.Types.ObjectId, ref: 'Users', })
    creator: SUsers;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Users', }], })
    members: SUsers[];

}

export const ProjectsSchema = SchemaFactory.createForClass(SProjects);