import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserCheck, UserCheckSchema } from 'src/schemas/user-check.shema';
import { UserCheckService } from './user-check.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { UserCheckController } from './user-check.controller';
import { CmfChileService } from 'src/cmf-chile/cmf-chile.service';

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
    providers: [UserCheckService, CmfChileService],
    controllers: [UserCheckController] 
 })
export class UserCheckModule {}
