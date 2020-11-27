import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TasksService } from './tasks/tasks.service';
import { StatesService } from './states/states.service';
import { StatesModule } from './states/states.module';
import { TasksModule } from './tasks/tasks.module';
import { BoardsSchema } from './schemas/boards.model';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService, StatesService, TasksService],
  imports: [StatesModule, TasksModule,
    MongooseModule.forFeature([
      { name: 'Boards', schema: BoardsSchema, },
    ]),
  ],
})
export class BoardsModule {}
