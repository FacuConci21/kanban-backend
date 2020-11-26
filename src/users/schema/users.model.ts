import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class SUsers {

    @Prop({ required: true, type: String, trim: true, })
    email: string;

    @Prop({ required: true, type: String, trim: true, minlength: 8, })
    password: string;
}

export const UsersSchema = SchemaFactory.createForClass(SUsers);