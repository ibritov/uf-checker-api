import { Body, ConflictException, Controller, Inject, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private userSerice: UsersService) {}

    @Post()
    async create(@Body() task: any) {
        
        return await this.userSerice.create(task)
        

    }
    
}
