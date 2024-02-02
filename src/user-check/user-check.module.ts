import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserCheck, UserCheckSchema } from 'src/schemas/user-check.shema';
import { UserCheckService } from './user-check.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
         MongooseModule.forFeature([
             {
                 name: UserCheck.name,
                 schema: UserCheckSchema
             }
         ]),
        UsersModule
     ],
    providers: [UserCheckService] 
 })
export class UserCheckModule {}
