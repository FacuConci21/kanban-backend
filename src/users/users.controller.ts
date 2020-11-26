import { Controller, Get, Post, Put, Delete, } from '@nestjs/common';
import { Res, Body, Param, Query, NotFoundException } from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserDTO } from "./dto/create-user.dto";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    async postUser(@Res() res, @Body() userDTO: CreateUserDTO, ) {
        const newUser = await this.usersService.createOne(userDTO);

        return res.json({
            message: 'created',
            newUser,
        });
    }

    @Get()
    async getUsers(@Res() res, ) {
        const users = await this.usersService.findAll();

        return res.json({
            message: 'received',
            users,
        });
    }

    @Get('/user')
    async getUser(@Res() res, @Query('email') email, ) {
        const theUser = await this.usersService.findOne(email);

        if (!theUser) {
            throw new NotFoundException('Empty result', 'No user has been returned.');
        }
        
        return res.json({
            message: 'received',
            theUser,
        });
    }

    @Put(':id')
    async putUser(@Res() res, @Param('id') id, @Body() userDTO: CreateUserDTO, ) {
        const updatedUser = await this.usersService.updateOne(id, userDTO);
        return res.json({
            message: 'completed',
            updatedUser,
        });
    }

    @Delete(':id')
    async deleteUser(@Res() res, @Param('id') id, ) {
        await this.usersService.deleteOne(id);

        return res.json({
            message: 'completed',
        });
    }

}
