import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { UsersSchema } from "./schema/users.model";
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Users', schema: UsersSchema, },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
