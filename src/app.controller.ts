import { Body, Controller, Get, Post, Request, UseGuards, } from '@nestjs/common';

import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { CreateUserDTO } from './users/dto/create-user.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService,
      private authService: AuthService,
    ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Body() userDTO: CreateUserDTO, ) {
    return await this.authService.login(req.user._doc._id, userDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getHello(@Request() req, ) {
    // Here I stagnate. The route respond "unauthorized" to all users.
    return req.user;
  }
}
