import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TasksService } from './tasks/tasks.service';
import { StatesService } from './states/states.service';
import { StatesModule } from './states/states.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService, StatesService, TasksService],
  imports: [StatesModule, TasksModule]
})
export class BoardsModule {}
