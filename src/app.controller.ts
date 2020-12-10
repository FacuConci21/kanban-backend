import { Controller, Get, Post, Request, UseGuards, } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";

import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, ) {
    return req.user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
