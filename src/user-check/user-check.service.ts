import {  Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCheck } from 'src/schemas/user-check.shema';
import { UsersService } from 'src/users/users.service';
import { CreateUserCheckDto } from './dto/create-user-check.dto';
import { CmfChileService } from 'src/cmf-chile/cmf-chile.service';

@Injectable()
export class UserCheckService {
    constructor(@InjectModel(UserCheck.name) private userCheckModel: Model<UserCheck>,
        private readonly usersService: UsersService,
        private readonly cmfChileService: CmfChileService
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

    async create(createUserCheck : CreateUserCheckDto) {
        createUserCheck.ufDate = new Date(createUserCheck.ufDate);
        const newUserCheck = new this.userCheckModel(createUserCheck)
        return newUserCheck.save()
        
    }
}
