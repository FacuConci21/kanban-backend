import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { StateSchema } from "../schemas/states.model";
import { StatesService } from "./states.service";

@Module({
    controllers: [],
    providers: [StatesService],
    imports: [MongooseModule.forFeature([
            { name: 'States', schema: StateSchema, },
        ]),
    ],

})
export class StatesModule {}
