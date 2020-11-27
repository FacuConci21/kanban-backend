import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IBoards } from "./interfaces/boards.interface";
import { CreateBoardDTO } from "./dtos/create-board.dto";

@Injectable()
export class BoardsService {

    constructor(@InjectModel('Boards') private boardModel: Model<IBoards>) {}

    createOne() {}

    findAll() {}
}
