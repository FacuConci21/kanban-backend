import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IBoards } from "./interfaces/boards.interface";
import { CreateBoardDTO } from "./dtos/create-board.dto";

@Injectable()
export class BoardsService {

    constructor(@InjectModel('Boards') private boardModel: Model<IBoards>) {}

    async createOne(boardDTO: CreateBoardDTO ): Promise<IBoards> {
        const newBoard =  new this.boardModel(boardDTO);
        return await newBoard.save();
    }

    async findAll(): Promise<IBoards[]> {
        return await this.boardModel.find();
    }

    async findOne(id: string): Promise<IBoards> {
        return await this.boardModel.findById(id);
    }

    async updateOne(id: string, boardDTO: CreateBoardDTO): Promise<IBoards> {
        return await this.boardModel.findByIdAndUpdate(id, boardDTO, { new: true, });
    }

    async deleteOne(id: string): Promise<IBoards> {
        return await this.boardModel.findByIdAndDelete(id);
    }

}
