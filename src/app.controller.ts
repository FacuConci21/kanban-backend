import { Body, Controller, Get, Post, Request, UseGuards, } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport";

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { CreateUserDTO } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
      private authService: AuthService,
    ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() userDTO: CreateUserDTO, ) {
    return await this.authService.login(req.user._doc._id, userDTO);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
