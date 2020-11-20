import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { ProjectService } from './project/project.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [ProjectModule,
    MongooseModule.forRoot('mongodb://localhost/kanban-db',
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }),
  ],
  controllers: [AppController],
  providers: [AppService, ProjectService],
})
export class AppModule {}
