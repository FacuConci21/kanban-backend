import { Prop, Schema, SchemaFactory, } from "@nestjs/mongoose";

@Schema({ timestamps: true, })
export class SProjects {

    @Prop({ required: true, type: String, })
    nombre: string;

    @Prop({ type: String})
    description: string;
}

export const ProjectsSchema = SchemaFactory.createForClass(SProjects);