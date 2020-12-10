import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProjectModule } from './project/project.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [
    ProjectModule,
    UsersModule,
    ConfigModule.forRoot({ isGlobal: true, }),
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService ,
    // { provide: APP_GUARD, useClass: JwtAuthGuard },
  ],
})
export class AppModule {}
