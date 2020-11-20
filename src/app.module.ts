import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { ProjectService } from './project/project.service';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [ProjectModule],
  controllers: [AppController],
  providers: [AppService, ProjectService],
})
export class AppModule {}
