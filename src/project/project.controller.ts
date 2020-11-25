import { Controller, Delete, Get, Post, Put, } from '@nestjs/common';
import { Res, Body, Param, Query, NotFoundException, } from "@nestjs/common";

import { ProjectService } from "./project.service";
import { CreateProjectDTO } from "./dtos/create-project.dto";

@Controller('project')
export class ProjectController {

    constructor(private productService: ProjectService) {}

    @Post()
    async postProject(@Res() res, @Body() projectDto: CreateProjectDTO ) {
        const newProduct = await this.productService.createOne(projectDto);
        return res.json({
            message: 'resourse created',
            newProduct,
        });
    }

    @Get()
    async getProjects(@Res() res, @Query('name') name: string, ) {
        const allProducts = await this.productService.findAll(name);
        
        if (!allProducts || allProducts.length == 0) 
            throw new NotFoundException('Empty result', 'No product has been returned.');

        return res.json({ 
            message: 'received',
            allProducts,
        })
    }

    @Get(':id')
    async getProject(@Res() res, @Param('id') id, ) {
        const theProduct = await this.productService.findOne(id);

        if (!theProduct)
            throw new NotFoundException('Empty result', 'No product has been returned.');

        return res.json({
            message: 'received',
            theProduct,
        })
    }

    @Put(':id')
    async putProject(@Res() res, @Param('id') id, @Body() projectDto: CreateProjectDTO) {
        const updateProject = await this.productService.updateOne(id, projectDto);

        return res.json({
            message: 'updated',
            updateProject,
        });
    }

    @Delete(':id')
    async deleteProject(@Res() res, @Param('id') id, ) {
        await this.productService.deleteOne(id);

        return res.json({
            message: 'deleted',
        })
    }

}
