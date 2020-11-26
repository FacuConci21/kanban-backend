import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProjectModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true, }),
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
