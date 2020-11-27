import { Module, } from '@nestjs/common';
import { ProjectController, } from './project.controller';
import { MongooseModule, } from "@nestjs/mongoose";
import { ProjectService, } from "./project.service";
import { ProjectsSchema, } from "./schemas/projects.model";

@Module({
  imports: [MongooseModule.forFeature([
      {name: 'Projects', schema: ProjectsSchema,},
    ]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
