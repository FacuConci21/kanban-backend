import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ timestamps: true, })
export class S {

}

// export const Schema = SchemaFactory.createForClass();