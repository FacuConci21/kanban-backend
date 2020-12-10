import { Controller, Delete, Get, Post, Put, } from '@nestjs/common';
import { Body, Query, Param, NotFoundException, } from "@nestjs/common";

import { CreateBoardDTO } from "./dtos/create-board.dto";
import { BoardsService } from "./boards.service";
import { query } from 'express';

@Controller('boards')
export class BoardsController {

    constructor(private boardsService: BoardsService) {}

    @Post()
    async postBoard(@Body() boardDTO: CreateBoardDTO) {
        const newBoard = await this.boardsService.createOne(boardDTO);
        return {
            message: 'created',
            newBoard,
        }
    }

    @Get()
    async getBoards(@Query() query, ) {
        const allBoards = await this.boardsService.findAll();

        if (!allBoards || allBoards.length <= 0) throw new NotFoundException('Empty result', 'No board returned');
        return {
            message: 'received',
            allBoards,
        }
    }

    @Get(':id')
    async getBoard(@Param('id') id, ) {
        const theBoard = await this.boardsService.findOne(id);

        if (!theBoard) throw new NotFoundException('Empty result', 'No board returned');
        return {
            message: 'received',
            theBoard,
        }
    }

    @Put(':id')
    async putBoard(@Param('id') id, @Body() boardDTO: CreateBoardDTO ) {
        const upBoard = await this.boardsService.updateOne(id, boardDTO );

        return {
            message: 'completed',
            upBoard,
        }
    }

    @Delete(':id')
    async deleteBoard(@Param('id') id, ) {
        await this.boardsService.deleteOne(id);
        
        return {
            message: 'completed',
        }
    }
}
