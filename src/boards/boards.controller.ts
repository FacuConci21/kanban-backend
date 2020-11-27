import { Controller, Get, Post, } from '@nestjs/common';
import { Body, Query, Param, NotFoundException, } from "@nestjs/common";

import { CreateBoardDTO } from "./dtos/create-board.dto";
import { BoardsService } from "./boards.service";

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
    async getBoard() {
        const allBoards = await this.boardsService.findAll();

        if (!allBoards || allBoards.length <= 0) throw new NotFoundException('Empty result', 'No board returned');
        return {
            message: 'received',
            allBoards,
        }
    }
}
