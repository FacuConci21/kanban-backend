import { Controller, Get, Post, Put, Delete, } from '@nestjs/common';
import { Res, Body, Param, Query, NotFoundException } from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserDTO } from "./dto/create-user.dto";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(@Res() res, ) {
        return res.json({
            message: 'received',
        });
    }

    @Get(':id')
    getUser(@Res() res, @Param('id') id, ) {
        return res.json({
            message: 'received',
            result: id,
        });
    }

    @Post()
    postUser(@Res() res, ) {
        return res.json({
            message: 'created',
        });
    }

    @Put(':id')
    putUser(@Res() res, @Param('id') id, ) {
        return res.json({
            message: 'completed',
            result: id,
        });
    }

    @Delete(':id')
    deleteUser(@Res() res, @Param('id') id, ) {
        return res.json({
            message: 'completed',
            result: id,
        });
    }

}
