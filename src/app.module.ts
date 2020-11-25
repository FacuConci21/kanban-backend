import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProjectModule,
    ConfigModule.forRoot({ isGlobal: true, }),
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
