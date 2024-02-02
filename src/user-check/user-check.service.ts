import { Body, Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCheck } from 'src/schemas/user-check.shema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class UserCheckService {
    constructor(@InjectModel(UserCheck.name) private userCheckModel: Model<UserCheck>,
        private readonly usersService: UsersService
    ) { }

    async getAllWithUsername() {
        const usersChecks: UserCheck[] = await this.userCheckModel.find()
        const usersChecksWithUserName  = []
        for (const userCheck of usersChecks) {
            const user = await this.usersService.findById(userCheck.userId)
            if(user) {
                const userCheckWithUserName = {
                    userCheck,
                    username: user.username
                }
                usersChecksWithUserName.push(userCheckWithUserName)
            }
        }
        return usersChecksWithUserName
    }

   // @Post()
    //async create(@Body)
}
