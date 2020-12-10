import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true, })
export class SState {

    @Prop({ required:true, type: String, })
    name: string;

    @Prop({ type: String, default: '000000' })
    color: string;

}

export const StateSchema = SchemaFactory.createForClass(SState);