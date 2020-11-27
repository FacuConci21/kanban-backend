import { Controller, Get, Post } from '@nestjs/common';

import { CreateBoardDTO } from "./dtos/create-board.dto";
import { BoardsService } from "./boards.service";

@Controller('boards')
export class BoardsController {

    constructor(private boardsService: BoardsService) {}

    @Post()
    postBoard() {}

    @Get()
    getBoard() {}
}
